
// Use proxy in development, direct API calls in production
const isDevelopment = import.meta.env.DEV;
const API_URL = isDevelopment ? '/api/whoop' : 'https://api.prod.whoop.com';
export const BASE_API_URL = `${API_URL}/developer/v1`;
export const OAUTH_URL = `${API_URL}/oauth/oauth2/token`;

export const endpoints = {
  cycle: `${BASE_API_URL}/cycle`,
  sleep: `${BASE_API_URL}/activity/sleep`,
  recovery: `${BASE_API_URL}/recovery`,
  workout: `${BASE_API_URL}/activity/workout`,
};
