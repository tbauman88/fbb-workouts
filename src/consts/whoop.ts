
const API_URL = 'api/whoop';
export const BASE_API_URL = `${API_URL}/developer/v1`;
export const OAUTH_URL = `${API_URL}/oauth/oauth2/token`;

export const endpoints = {
  cycle: `${BASE_API_URL}/cycle`,
  sleep: `${BASE_API_URL}/activity/sleep`,
  recovery: `${BASE_API_URL}/recovery`,
  workout: `${BASE_API_URL}/activity/workout`,
};

export const INTEGRATION_ID = '72ff3642-bbd5-48f9-951e-8fe2a0e4b43f';
