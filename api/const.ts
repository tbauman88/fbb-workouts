const WHOOP_API_BASE = 'https://api.prod.whoop.com';
const WHOOP_API_VERSION = 'v2';
export const WHOOP_API_URL = `${WHOOP_API_BASE}/developer/${WHOOP_API_VERSION}`;
export const WHOOP_OAUTH_URL = `${WHOOP_API_BASE}/oauth/oauth2/token`;

export const REQUEST_TIMEOUT = 10000; // 10 seconds
export const SECURITY_MAX_TIMESTAMP_DIFF = 5 * 60 * 1000; // 5 minutes

export const ALLOWED_ENDPOINTS: Record<string, string> = {
  '/cycle': 'User cycle data',
  '/recovery': 'Recovery metrics',
  '/activity/sleep': 'Sleep data',
  '/activity/workout': 'Workout activities'
} as const;

export const ALLOWED_CONTENT_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml'
];

export enum WHOOP_EVENT_TYPES {
  RECOVERY_UPDATED = 'recovery.updated',
  RECOVERY_DELETED = 'recovery.deleted',
  WORKOUT_UPDATED = 'workout.updated',
  WORKOUT_DELETED = 'workout.deleted',
  SLEEP_UPDATED = 'sleep.updated',
  SLEEP_DELETED = 'sleep.deleted',
}

type GrantType = 'authorization_code' | 'refresh_token';

export interface OAuthRequest {
  grant_type: GrantType;
  client_id: string;
  client_secret: string;
  code?: string;
  refresh_token?: string;
  redirect_uri?: string;
  scope?: string;
}
