/// <reference types="vite/client" />

export const config = {
  hasuraUrl: import.meta.env.VITE_HASURA_GRAPHQL_URL,
  hasuraAdminSecret: import.meta.env.VITE_HASURA_ADMIN_SECRET,
  environment: import.meta.env.MODE, // 'development' or 'production'
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD
}
