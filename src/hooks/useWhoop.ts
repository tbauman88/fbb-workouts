import { useState, useEffect } from 'react';
import { Cycle, Recovery, Sleep, Workout } from '../types/';
import { INTEGRATION_ID } from '../consts';
import { useGetIntegrationsQuery } from '../generated/graphql';
import { WhoopService } from '../services';
import { fromUnixTime, isBefore } from 'date-fns';

interface WhoopOverview {
  cycle: Cycle;
  sleep: Sleep;
  recovery: Recovery;
  workout: Workout;
}

interface WhoopTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

interface WhoopState {
  stats: WhoopOverview | null;
  loading: boolean;
  error?: Error;
  hasTokens: boolean;
}

interface WhoopExpiresData {
  expiresAt: Date | null;
  updatedAt: Date | null;
}

export const useWhoop = () => {
  const [state, setState] = useState<WhoopState>({
    stats: null,
    loading: true,
    hasTokens: false,
  });

  const [tokens, setTokens] = useState<WhoopTokens>({
    accessToken: null,
    refreshToken: null,
  });

  const [expiresData, setExpiresData] = useState<WhoopExpiresData>({
    expiresAt: null,
    updatedAt: null,
  });

  const [refreshAttempted, setRefreshAttempted] = useState(false);

  const { data, loading: queryLoading, error: queryError } = useGetIntegrationsQuery({
    variables: { id: INTEGRATION_ID },
    errorPolicy: 'all'
  });
  const { fetchWithAuth, refreshAccessToken } = WhoopService();

  useEffect(() => {
    if (queryLoading) return;

    if (queryError || !data?.integration?.access_token) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: queryError ? new Error(`Failed to load integration: ${queryError.message}`) : new Error('No Whoop integration found'),
        hasTokens: false,
      }));
      return;
    }

    setExpiresData({
      expiresAt: fromUnixTime(data.integration.expires_at),
      updatedAt: new Date(data.integration.updated_at),
    });

    setTokens({
      accessToken: data.integration.access_token,
      refreshToken: data.integration.refresh_token,
    });

    setState(prev => ({
      ...prev,
      hasTokens: true,
      error: undefined,
    }));
  }, [data?.integration, queryLoading, queryError]);

  useEffect(() => {
    if (!tokens.accessToken || !tokens.refreshToken) return;

    const { accessToken, refreshToken } = tokens;
    const { expiresAt } = expiresData;

    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true }));

      try {
        let currentAccessToken = accessToken;

        // Check if token is expired and we haven't already tried refreshing
        if (expiresAt && isBefore(expiresAt, new Date()) && !refreshAttempted) {
          console.log('Token expired, attempting refresh...');
          setRefreshAttempted(true);
          try {
            currentAccessToken = await refreshAccessToken(refreshToken);
            console.log('✅ Token refresh successful');
          } catch (refreshError) {
            console.error('❌ Token refresh failed:', refreshError);
            setState(prev => ({
              ...prev,
              loading: false,
              error: new Error('Whoop tokens have expired. Please reconnect your account.'),
              hasTokens: false,
            }));
            return;
          }
        }

        const [cycle, recovery, sleep, workout] = await Promise.all([
          fetchWithAuth('cycle', currentAccessToken, refreshToken),
          fetchWithAuth('recovery', currentAccessToken, refreshToken),
          fetchWithAuth('sleep', currentAccessToken, refreshToken),
          fetchWithAuth('workout', currentAccessToken, refreshToken),
        ]);

        // Check if we have all required data
        if (!cycle || !recovery || !sleep || !workout) {
          console.warn('⚠️ Some Whoop data is missing:', {
            cycle: !!cycle,
            recovery: !!recovery,
            sleep: !!sleep,
            workout: !!workout,
          });

          setState(prev => ({
            ...prev,
            loading: false,
            error: new Error('Incomplete Whoop data. You may need to use your Whoop device to generate recent activity data.'),
          }));
          return;
        }

        setState(prev => ({
          ...prev,
          stats: { cycle, sleep, recovery, workout },
          loading: false,
          error: undefined,
        }));
      } catch (err) {
        console.error('Error fetching Whoop data:', err);

        // If this is an auth error, suggest reconnection
        const isAuthError = err instanceof Error && (
          err.message.includes('Authorization') ||
          err.message.includes('invalid_token') ||
          err.message.includes('401')
        );

        setState(prev => ({
          ...prev,
          loading: false,
          error: isAuthError
            ? new Error('Whoop authorization expired. Please reconnect your account.')
            : err instanceof Error ? err : new Error('Failed to fetch Whoop data'),
          hasTokens: !isAuthError,
        }));
      }
    };

    fetchData();
  }, [tokens, expiresData, refreshAttempted]);

  // Reset refresh attempt when tokens change (e.g., after manual reconnection)
  useEffect(() => {
    setRefreshAttempted(false);
  }, [tokens.accessToken]);

  return state;
};
