import axios from 'axios';
import { endpoints, OAUTH_URL } from 'consts';
import { endOfDay, startOfDay, subDays } from 'date-fns';
import { useUpsertWhoopIntegrationMutation } from 'generated/graphql';
import { config } from '../../environment';

const isDevelopment = import.meta.env.DEV;

export const WhoopService = () => {
  const [upsertWhoopIntegration] = useUpsertWhoopIntegrationMutation();

  const refreshAccessToken = async (
    refreshToken: string,
    integrationId: string | undefined
  ) => {
    try {
      console.log('Refreshing Whoop access token...');

      if (!integrationId) {
        throw new Error('Integration ID is required');
      }

      if (!integrationId) {
        throw new Error('Integration ID is required');
      }

      let response;

      if (isDevelopment) {
        // Development: Use form-encoded data (traditional OAuth)
        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', refreshToken);
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
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
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

      const { access_token, refresh_token, expires_in } = response.data;
      console.log('✅ Token refreshed successfully');

      // Calculate expiration timestamp (current time + expires_in seconds)
      const expiresAt = Math.floor(Date.now() / 1000) + expires_in;

      await upsertWhoopIntegration({
        variables: {
          id: integrationId,
          accessToken: access_token,
          refreshToken: refresh_token,
          expiresAt
        },
      });

      return access_token;
    } catch (err) {
      console.error('❌ Failed to refresh access token:', err);
      if (axios.isAxiosError(err)) {
        console.error('Response data:', err.response?.data);
        console.error('Response status:', err.response?.status);
        console.error('Request config:', {
          url: err.config?.url,
          method: err.config?.method,
          headers: err.config?.headers,
          data: err.config?.data,
        });
      }
      throw new Error(`Failed to refresh access token: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const fetchWithAuth = async (
    action: keyof typeof endpoints,
    accessToken: string,
    refreshToken: string,
    integrationId: string | undefined,
  ): Promise<unknown[] | unknown | null> => {
    try {
      console.log(`Fetching Whoop ${action} data...`);

      const date = new Date();
      const today = action === "workouts" ? subDays(date, 7) : date;

      const response = await axios.get(endpoints[action], {
        params: {
          start: startOfDay(today).toISOString(),
          end: endOfDay(date).toISOString(),
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });

      console.log(`✅ Successfully fetched ${action} data`);

      // Safely access the records
      if (!response.data || !response.data.records || response.data.records.length === 0) {
        console.warn(`⚠️ No ${action} data found in response`);
        return null;
      }

      // For workouts, return all records. For other actions, return the first record
      if (action === "workouts") {
        return response.data.records;
      } else {
        return response.data.records[0];
      }
    } catch (error) {
      console.error(`❌ Error fetching ${action} data:`, error);

      if (axios.isAxiosError(error)) {
        console.error('Response status:', error.response?.status);
        console.error('Response data:', error.response?.data);

        // Check for authorization errors (401 or specific message)
        if (
          error.response?.status === 401 ||
          error.response?.data === 'Authorization was not valid' ||
          error.response?.data?.error === 'invalid_token'
        ) {
          console.log('Authorization error detected, attempting to refresh token...');
          try {
            const newAccessToken = await refreshAccessToken(refreshToken, integrationId);
            return fetchWithAuth(action, newAccessToken, refreshToken, integrationId);
          } catch (refreshError) {
            console.error('❌ Token refresh failed during retry:', refreshError);
            throw new Error('Failed to refresh expired token');
          }
        }
      }

      throw error;
    }
  };

  return { fetchWithAuth, refreshAccessToken };
};
