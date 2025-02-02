import { PrismaClient } from '@prisma/client';
import { QueryResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const taskQueries: QueryResolvers = {
  async getTasks() {
    return await prisma.task.findMany();
  },

  async getTask(_, { id }) {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  },
};
