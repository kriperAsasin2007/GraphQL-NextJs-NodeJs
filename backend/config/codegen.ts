import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['src/user/type.ts', 'src/todo/type.ts', 'src/task/type.ts'],
  generates: {
    'types/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  pluckConfig: {
    modules: [
      {
        name: 'graphql-tag',
        identifier: 'gql',
      },
    ],
  },
};
export default config;
