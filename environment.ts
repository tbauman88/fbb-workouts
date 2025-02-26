/// <reference types="vite/client" />

const whoopConfig = {
  clientSecret: import.meta.env.VITE_WHOOP_CLIENT_SECRET,
  clientId: import.meta.env.VITE_WHOOP_CLIENT_ID,
}

export const config = {
  ...whoopConfig,
  hasuraUrl: import.meta.env.VITE_HASURA_GRAPHQL_URL,
  hasuraAdminSecret: import.meta.env.VITE_HASURA_ADMIN_SECRET,
  environment: import.meta.env.MODE, // 'development' or 'production'
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}
