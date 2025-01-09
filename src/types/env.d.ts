/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HASURA_GRAPHQL_URL: string
    readonly VITE_HASURA_ADMIN_SECRET: string
    readonly MODE: string
    readonly DEV: boolean
    readonly PROD: boolean
    }
    
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }