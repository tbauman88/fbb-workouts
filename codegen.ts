import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config';

const HASURA_URL = process.env.VITE_HASURA_GRAPHQL_URL || import.meta.env.VITE_HASURA_GRAPHQL_URL;
const HASURA_SECRET = process.env.VITE_HASURA_ADMIN_SECRET || import.meta.env.VITE_HASURA_ADMIN_SECRET;


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
        withComponent: false,
        withHOC: false,
        withMutationFn: true, // ✅ Ensures mutations return proper type-safe function
        fetcher: 'fetch', // ✅ Uses native `fetch` instead of ApolloClient instance
        scalars: {
          uuid: 'string',
          String: 'string',
          Int: 'number',
          Float: 'number',
          Boolean: 'boolean',
          jsonb: 'any',
          json: 'any',
          bigint: 'string', // Prevents JS number overflow
          timestamp: 'string', // Treat timestamps as ISO strings
          timestamptz: 'string', // Same as above
          date: 'string',  // ✅ Fix: Maps `date` scalar to `string`
        },
        strictScalars: true, // Enforce type safety
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
          transformUnderscore: true, // ✅ Converts `snake_case` fields to `camelCase`
        },
        avoidOptionals: {
          field: true, // ✅ Avoids optional fields
          object: false, // ✅ Allows optional nested objects (prevents breaking Hasura types)
          inputValue: false, // ✅ Allows optional input values (avoids strict GraphQL inputs)
        },
        maybeValue: 'T | null | undefined', // ✅ Ensures TypeScript properly infers `null` values
        dedupeOperationSuffix: true, // ✅ Removes duplicate suffixes like `QueryQuery`
        dedupeFragments: true, // ✅ Keeps fragments unique
        omitOperationSuffix: true, // ✅ Removes `Query`/`Mutation` suffix from type names
        skipDocumentsValidation: true, // ✅ Avoids redundant document validation
      }
    },
    './graphql.schema.graphql': {
      plugins: ['schema-ast']
    }
  }
}

export default config;
