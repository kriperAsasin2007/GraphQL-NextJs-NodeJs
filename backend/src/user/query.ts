import { PrismaClient } from '@prisma/client';
import { QueryResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const userQueries: QueryResolvers = {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  },

  async getUser(_, args) {
    const user = await prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });
    return user;
  },
};
