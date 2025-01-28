import 'dotenv/config'

export default {
  schema: [
    {
      [process.env.VITE_HASURA_GRAPHQL_URL]: {
        headers: {
          'x-hasura-admin-secret': process.env.VITE_HASURA_ADMIN_SECRET
        }
      }
    }
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        skipTypename: false,
        dedupeFragments: true
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}
