import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { setCorsHeaders, validateMethod, createTimeoutController, createErrorResponse, logger, getErrorInfo } from '../_utils';
import { OAuthRequest, REQUEST_TIMEOUT, WHOOP_OAUTH_URL } from '../const';

function validateOAuthRequest(body: Partial<OAuthRequest>): { isValid: boolean; error?: string } {
  const { grant_type, client_id, client_secret, code, refresh_token, redirect_uri } = body;

  if (!grant_type || !client_id || !client_secret) {
    return {
      isValid: false,
      error: 'Missing required parameters: grant_type, client_id, client_secret'
    };
  }

  // Validate grant_type
  if (!['authorization_code', 'refresh_token'].includes(grant_type)) {
    return {
      isValid: false,
      error: 'Invalid grant_type. Must be either "authorization_code" or "refresh_token"'
    };
  }

  // Validate grant_type specific requirements
  if (grant_type === 'authorization_code') {
    if (!code || !redirect_uri) {
      return {
        isValid: false,
        error: 'Missing required parameters for authorization_code: code, redirect_uri'
      };
    }

    // Basic validation for authorization code format
    if (typeof code !== 'string' || code.length < 10) {
      return {
        isValid: false,
        error: 'Invalid authorization code format'
      };
    }

    // Validate redirect_uri format
    try {
      new URL(redirect_uri);
    } catch {
      return {
        isValid: false,
        error: 'Invalid redirect_uri format'
      };
    }
  }

  if (grant_type === 'refresh_token') {
    if (!refresh_token) {
      return {
        isValid: false,
        error: 'Missing required parameter for refresh_token: refresh_token'
      };
    }

    // Basic validation for refresh token format
    if (typeof refresh_token !== 'string' || refresh_token.length < 10) {
      return {
        isValid: false,
        error: 'Invalid refresh token format'
      };
    }
  }

  return { isValid: true };
}

async function performOAuthRequest(oauthData: OAuthRequest) {
  const { controller, cleanup } = createTimeoutController(REQUEST_TIMEOUT);

  try {
    // Create URLSearchParams for proper form encoding
    const params = new URLSearchParams();
    params.append('grant_type', oauthData.grant_type);
    params.append('client_id', oauthData.client_id);
    params.append('client_secret', oauthData.client_secret);

    if (oauthData.grant_type === 'authorization_code') {
      params.append('code', oauthData.code!);
      params.append('redirect_uri', oauthData.redirect_uri!);
      if (oauthData.scope) params.append('scope', oauthData.scope);
    } else if (oauthData.grant_type === 'refresh_token') {
      params.append('refresh_token', oauthData.refresh_token!);
      if (oauthData.scope) params.append('scope', oauthData.scope);
    }

    logger.info(`Processing WHOOP OAuth request`, { grant_type: oauthData.grant_type });

    const response = await axios.post(WHOOP_OAUTH_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'User-Agent': 'BaumanLift/1.0'
      },
      timeout: REQUEST_TIMEOUT,
      signal: controller.signal,
      validateStatus: (status) => status < 500, // Don't throw for 4xx errors
    });

    cleanup();

    if (response.status >= 400) {
      const errorMessage = response.data?.error_description || response.data?.error || 'OAuth request failed';
      const error = new Error(errorMessage) as Error & { status: number; data: unknown };
      error.status = response.status;
      error.data = response.data;
      throw error;
    }

    logger.success('WHOOP OAuth request successful');
    return response.data;

  } catch (error) {
    cleanup();

    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        const timeoutError = new Error('OAuth request timeout - WHOOP API took too long to respond') as Error & { status: number };
        timeoutError.status = 408;
        throw timeoutError;
      }

      logger.error('WHOOP OAuth API error', error, {
        status: error.response?.status,
        error: error.response?.data?.error,
        description: error.response?.data?.error_description
      });

      const apiError = new Error(
        error.response?.data?.error_description ||
        error.response?.data?.error ||
        'OAuth request failed'
      ) as Error & { status: number; data: unknown };
      apiError.status = error.response?.status || 500;
      apiError.data = error.response?.data;
      throw apiError;
    }

    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res, ['POST', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const methodValidation = validateMethod(req.method, ['POST']);
  if (!methodValidation.isValid) {
    return res.status(405).json(methodValidation.error);
  }

  // Validate request body
  const validation = validateOAuthRequest(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.error });
  }

  try {
    const tokenData = await performOAuthRequest(req.body as OAuthRequest);
    return res.status(200).json(tokenData);
  } catch (error: unknown) {
    const { status, message, data } = getErrorInfo(error);

    logger.error(`OAuth request failed`, error, {
      grant_type: req.body?.grant_type,
      status,
      message
    });

    return res.status(status).json(createErrorResponse(
      message,
      'OAUTH_ERROR',
      status < 500 && data ? data : undefined
    ));
  }
} 
