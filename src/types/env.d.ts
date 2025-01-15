/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HASURA_GRAPHQL_URL: string
  readonly VITE_HASURA_ADMIN_SECRET: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly VITE_ENVIRONMENT: string
  readonly VITE_AUTH_EMAIL: string
  readonly VITE_AUTH_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
