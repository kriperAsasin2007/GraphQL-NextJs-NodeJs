import { UserResolvers, User } from '../../types/resolvers-types.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userResolvers: UserResolvers = {
  User: {
    toDos: async (parent: User) => {
      return await prisma.toDo.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
};
