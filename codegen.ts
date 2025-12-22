import * as dotenv from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';
dotenv.config();
const endpoint = process.env.GRAPHQL_ENDPOINT || 'https://example.com/graphql';
const config: CodegenConfig = {
  schema: [
    {
      [endpoint]: {
        headers: {
          ...(process.env.GRAPHQL_API_KEY ? { 'x-api-key': process.env.GRAPHQL_API_KEY } : {}),
        },
      },
    },
  ],
  documents: 'src/graphql/operations/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        addDocBlocks: false,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
export default config;