import axios from 'axios';
import { config } from '../../environment';

interface WhoopTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export const exchangeWhoopAuthCode = async (authCode: string): Promise<WhoopTokenResponse> => {
  try {
    console.log('Exchanging Whoop authorization code for tokens...');

    // Create URLSearchParams for proper form encoding
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', authCode);
    params.append('redirect_uri', config.isDevelopment
      ? 'http://localhost:3007/auth/whoop/callback'
      : 'https://bauman-lift.vercel.app/auth/whoop/callback'
    );
    params.append('client_id', config.clientId);
    params.append('client_secret', config.clientSecret);

    const response = await axios.post('/api/whoop/oauth/oauth2/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
    });

    console.log('✅ Successfully received Whoop tokens');
    return response.data;
  } catch (error) {
    console.error('❌ Error exchanging authorization code:', error);
    if (axios.isAxiosError(error)) {
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
      console.error('Request config:', {
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers,
        data: error.config?.data,
      });
    }
    throw error;
  }
};



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

    return await exchangeWhoopAuthCode(authCode);
  }
};


