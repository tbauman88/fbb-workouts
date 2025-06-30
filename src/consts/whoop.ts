
const API_URL = '/api/whoop';
export const BASE_API_URL = `${API_URL}/developer/v1`;
export const OAUTH_URL = `${API_URL}/oauth/oauth2/token`;

export const endpoints = {
  cycle: `${BASE_API_URL}/cycle`,
  sleep: `${BASE_API_URL}/activity/sleep`,
  recovery: `${BASE_API_URL}/recovery`,
  workout: `${BASE_API_URL}/activity/workout`,
};

export const INTEGRATION_ID = '53824468-eb4d-4d09-af10-4aa706e93290';
