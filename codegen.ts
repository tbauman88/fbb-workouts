import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const HASURA_URL = process.env.VITE_HASURA_GRAPHQL_URL || import.meta.env.VITE_HASURA_GRAPHQL_URL
const HASURA_SECRET = process.env.VITE_HASURA_ADMIN_SECRET || import.meta.env.VITE_HASURA_ADMIN_SECRET

const config: CodegenConfig = {
  schema: [
    {
      [HASURA_URL]: {
        headers: {
          'x-hasura-admin-secret': HASURA_SECRET
        }
      }
    }
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        useTypeImports: true,
        withHooks: true,
        withMutationFn: true,
        fetcher: 'fetch',
        scalars: {
          uuid: 'string',
          String: 'string',
          Int: 'number',
          Float: 'number',
          Boolean: 'boolean',
          jsonb: 'any',
          json: 'any',
          bigint: 'string',
          timestamp: 'string',
          timestamptz: 'string',
          date: 'string'
        },
        strictScalars: true,
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
          transformUnderscore: true
        },
        avoidOptionals: {
          field: true,
          object: false,
          inputValue: false
        },
        maybeValue: 'T | null | undefined',
        documentVariableSuffix: false
      }
    }
  }
}

export default config
