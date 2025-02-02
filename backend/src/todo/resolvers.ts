import { ToDo, ToDoResolvers } from '../../types/resolvers-types.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const toDoResolvers: ToDoResolvers = {
  ToDo: {
    tasks: async (parent: ToDo) => {
      return await prisma.task.findMany({
        where: {
          toDoId: parent.id,
        },
      });
    },
  },
};
