import { ApolloServer } from '@apollo/server';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

// Import your GraphQL schema
import { userQueries } from './user/query.js';
import { toDoQueries } from './todo/query.js';
import { taskQueries } from './task/query.js';
import userTypeDefs from './user/type.js';
import todoTypeDefs from './todo/type.js';
import taskTypeDefs from './task/type.js';
import { userMutations } from './user/mutation.js';
import { toDoMutations } from './todo/mutation.js';
import { taskMutations } from './task/mutation.js';

// Extra resolvers

import { userResolvers } from './user/resolvers.js';
import { toDoResolvers } from './todo/resolvers.js';

dotenv.config();

const prisma = new PrismaClient();

interface ContextType {
  prisma: PrismaClient;
}

async function bootstrap() {
  const app = express();

  const server = new ApolloServer<ContextType>({
    typeDefs: [userTypeDefs, todoTypeDefs, taskTypeDefs],
    resolvers: {
      Query: {
        ...userQueries,
        ...toDoQueries,
        ...taskQueries,
      },
      Mutation: {
        ...userMutations,
        ...toDoMutations,
        ...taskMutations,
      },
      ...userResolvers,
      ...toDoResolvers,
    },
    introspection: true,
    includeStacktraceInErrorResponses: true,
  });

  await server.start();

  app.use(
    '/graphql',
    bodyParser.json(),
    expressMiddleware(server, {
      context: async () => ({ prisma }),
    }),
  );

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}

bootstrap();
