import axios from 'axios';
import { OAUTH_URL } from 'consts';
import { config } from '../../environment';

const isDevelopment = import.meta.env.DEV;

interface WhoopTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export async function exchangeCodeForTokens(authCode: string, redirectUri: string) {
  try {
    console.log('Exchanging authorization code for tokens...');

    let response;

    if (isDevelopment) {
      // Development: Use form-encoded data (traditional OAuth)
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', authCode);
      params.append('redirect_uri', redirectUri);
      params.append('client_id', config.clientId);
      params.append('client_secret', config.clientSecret);
      params.append('scope', 'offline');

      response = await axios.post(OAUTH_URL, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
      });
    } else {
      // Production: Use serverless function with JSON body
      response = await axios.post(OAUTH_URL, {
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectUri,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: 'offline'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
    }

    console.log('✅ Successfully exchanged code for tokens');
    return response.data;
  } catch (error) {
    console.error('❌ Failed to exchange authorization code:', error);

    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }

    throw error;
  }
}

// Helper function to extract auth code from URL
export const extractAuthCodeFromUrl = (url: string): string | null => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('code');
  } catch {
    return null;
  }
};

// OAuth helper for token exchange
export const whoopOAuthHelper = {
  async exchangeTokensOnly(authCodeOrUrl: string): Promise<WhoopTokenResponse> {
    // Extract code from URL if full URL is provided
    const authCode = authCodeOrUrl.includes('code=')
      ? extractAuthCodeFromUrl(authCodeOrUrl)
      : authCodeOrUrl;

    if (!authCode) {
      throw new Error('No authorization code found');
    }

    return await exchangeCodeForTokens(authCode, config.isDevelopment
      ? 'http://localhost:3007/auth/whoop/callback'
      : 'https://bauman-lift.vercel.app/auth/whoop/callback'
    );
  }
};


