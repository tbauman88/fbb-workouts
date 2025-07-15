import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { endOfDay, startOfDay, subDays } from 'date-fns';
import { createErrorResponse, getErrorInfo, logger, setCorsHeaders, validateMethod } from '../_utils';
import { ALLOWED_ENDPOINTS, REQUEST_TIMEOUT, WHOOP_API_URL } from '../const';

function validateAuthHeader(authHeader: string | undefined): { isValid: boolean; token?: string; error?: string } {
  if (!authHeader) {
    return { isValid: false, error: 'Missing authorization header' };
  }

  if (!authHeader.startsWith('Bearer ')) {
    return { isValid: false, error: 'Invalid authorization header format. Expected: Bearer <token>' };
  }

  const token = authHeader.substring(7);

  if (!token || token.length < 10) {
    return { isValid: false, error: 'Invalid or missing access token' };
  }

  return { isValid: true, token };
}

function validateEndpoint(endpoint: unknown): { isValid: boolean; endpoint?: string; error?: string } {
  if (!endpoint || typeof endpoint !== 'string') {
    return { isValid: false, error: 'Missing or invalid endpoint parameter' };
  }

  if (!Object.keys(ALLOWED_ENDPOINTS).includes(endpoint)) {
    return {
      isValid: false,
      error: `Invalid endpoint. Allowed endpoints: ${Object.keys(ALLOWED_ENDPOINTS).join(', ')}`
    };
  }

  return { isValid: true, endpoint };
}

async function handleWhoopRequest(endpoint: string, accessToken: string) {
  const url = `${WHOOP_API_URL}${endpoint}`;

  logger.info(`Fetching WHOOP data from endpoint`, { endpoint });

  const isWorkout = endpoint.includes("/workout");
  const date = new Date();
  const startDate = subDays(date, 7);

  const params = isWorkout
    ? { start: startOfDay(startDate).toISOString(), end: endOfDay(date).toISOString() }
    : { limit: 1 };

  try {
    const response = await axios.get(url, {
      params,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'User-Agent': 'BaumanLift/1.0'
      },
      timeout: REQUEST_TIMEOUT,
      validateStatus: (status) => status < 500, // Don't throw for 4xx errors
    });

    if (response.status >= 400) {
      const errorMessage = response.data?.message || response.data?.error || 'API request failed';
      const error = new Error(errorMessage) as Error & { status: number; data: unknown };
      error.status = response.status;
      error.data = response.data;
      throw error;
    }

    logger.success(`Successfully fetched WHOOP data`, { endpoint });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error(`WHOOP API error`, error, {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        endpoint
      });

      // Handle specific error cases
      if (error.code === 'ECONNABORTED') {
        const timeoutError = new Error('Request timeout - WHOOP API took too long to respond') as Error & { status: number };
        timeoutError.status = 408;
        throw timeoutError;
      }

      if (error.response?.status === 401) {
        const authError = new Error('Invalid or expired access token') as Error & { status: number };
        authError.status = 401;
        throw authError;
      }

      if (error.response?.status === 429) {
        const rateLimitError = new Error('Rate limit exceeded - please try again later') as Error & { status: number };
        rateLimitError.status = 429;
        throw rateLimitError;
      }

      // Re-throw with status code for proper error handling
      const apiError = new Error(error.response?.data?.message || error.message) as Error & { status: number };
      apiError.status = error.response?.status || 500;
      throw apiError;
    }

    logger.error(`Unexpected error for endpoint`, error, { endpoint });
    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res, ['GET', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const methodValidation = validateMethod(req.method, ['GET']);
  if (!methodValidation.isValid) {
    return res.status(405).json(methodValidation.error);
  }

  // Validate authorization
  const authValidation = validateAuthHeader(req.headers.authorization);
  if (!authValidation.isValid) {
    return res.status(401).json({ error: authValidation.error });
  }

  // Validate endpoint
  const endpointValidation = validateEndpoint(req.query.endpoint);
  if (!endpointValidation.isValid) {
    return res.status(400).json(createErrorResponse(
      endpointValidation.error || 'Invalid endpoint',
      'INVALID_ENDPOINT',
      { available_endpoints: ALLOWED_ENDPOINTS }
    ));
  }

  try {
    const data = await handleWhoopRequest(endpointValidation.endpoint!, authValidation.token!);
    return res.status(200).json(data);
  } catch (error: unknown) {
    const { status, message } = getErrorInfo(error);

    logger.error(`Request failed`, error, {
      endpoint: endpointValidation.endpoint,
      status,
      message
    });

    return res.status(status).json(createErrorResponse(
      message,
      'WHOOP_API_ERROR',
      { endpoint: endpointValidation.endpoint }
    ));
  }
} 
