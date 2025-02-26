import { useState, useEffect } from 'react';
import { Cycle, Recovery, Sleep, Workout } from '../types/';
import { INTEGRATION_ID } from '../consts';
import { useGetIntegrationsQuery } from '../generated/graphql';
import { WhoopService } from '../services';

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
}

export const useWhoop = () => {
  const [state, setState] = useState<WhoopState>({
    stats: null,
    loading: true,
  });

  const [tokens, setTokens] = useState<WhoopTokens>({
    accessToken: null,
    refreshToken: null,
  });

  const { data } = useGetIntegrationsQuery({ variables: { id: INTEGRATION_ID } });
  const { fetchWithAuth } = WhoopService();

  useEffect(() => {
    if (!data?.integration?.access_token) return;

    setTokens({
      accessToken: data.integration.access_token,
      refreshToken: data.integration.refresh_token,
    });
  }, [data?.integration]);

  useEffect(() => {
    if (!tokens.accessToken || !tokens.refreshToken) return;
    const { accessToken, refreshToken } = tokens;

    const fetchData = async () => {
      try {
        const [cycle, recovery, sleep, workout] = await Promise.all([
          fetchWithAuth('cycle', accessToken, refreshToken),
          fetchWithAuth('recovery', accessToken, refreshToken),
          fetchWithAuth('sleep', accessToken, refreshToken),
          fetchWithAuth('workout', accessToken, refreshToken),
        ]);

        setState((prev) => ({
          ...prev,
          stats: { cycle, sleep, recovery, workout },
          loading: false,
        }));
      } catch (err) {
        setState((prev) => ({ ...prev, loading: false, error: err as Error }));
      }
    };

    fetchData();
  }, [tokens]);

  return state;
};
