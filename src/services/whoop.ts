import axios from 'axios';
import { config } from '../../environment';
import { endpoints, OAUTH_URL, INTEGRATION_ID } from '../consts';
import { useUpsertWhoopIntegrationMutation } from '../generated/graphql';

export const WhoopService = () => {
  const [upsertWhoopIntegration] = useUpsertWhoopIntegrationMutation();

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const response = await axios.post(
        OAUTH_URL,
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: config.clientId,
          client_secret: config.clientSecret,
          scope: 'offline',
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      const { access_token, refresh_token, expires_in } = response.data;

      await upsertWhoopIntegration({
        variables: { id: INTEGRATION_ID, accessToken: access_token, refreshToken: refresh_token, expiresAt: expires_in },
      });

      return access_token;
    } catch (err) {
      throw new Error('Failed to refresh access token');
    }
  };

  const fetchWithAuth = async (
    action: keyof typeof endpoints,
    accessToken: string,
    refreshToken: string,
  ): Promise<any> => {
    try {
      const response = await axios.get(endpoints[action], {
        params: { limit: 1 },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return response.data.records[0];
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data === 'Authorization was not valid') {
        const newAccessToken = await refreshAccessToken(refreshToken);

        return fetchWithAuth(action, newAccessToken, refreshToken);
      }

      throw error;
    }
  };

  return { fetchWithAuth, refreshAccessToken };
};
