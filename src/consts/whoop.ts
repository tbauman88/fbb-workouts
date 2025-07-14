const isDevelopment = import.meta.env.DEV;

let endpoints: {
  cycle: string;
  sleep: string;
  recovery: string;
  workouts: string;
};

const BASE_API_URL = isDevelopment ? '/api/whoop' : 'https://bauman-lift.vercel.app/api/whoop';
const OAUTH_URL = isDevelopment ? '/api/whoop-oauth' : 'https://bauman-lift.vercel.app/api/whoop-oauth';

if (isDevelopment) {
  // Development: Use Vite proxy (same as before)
  endpoints = {
    cycle: `${BASE_API_URL}/developer/v2/cycle`,
    sleep: `${BASE_API_URL}/developer/v2/activity/sleep`,
    recovery: `${BASE_API_URL}/developer/v2/recovery`,
    workouts: `${BASE_API_URL}/developer/v2/activity/workout`,
  };
} else {
  // Production: Use serverless functions
  endpoints = {
    cycle: `${BASE_API_URL}?endpoint=/cycle`,
    sleep: `${BASE_API_URL}?endpoint=/activity/sleep`,
    recovery: `${BASE_API_URL}?endpoint=/recovery`,
    workouts: `${BASE_API_URL}?endpoint=/activity/workout`,
  };
}

export { BASE_API_URL, OAUTH_URL, endpoints };
