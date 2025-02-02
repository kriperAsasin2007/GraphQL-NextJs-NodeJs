import { PrismaClient } from '@prisma/client';
import { MutationResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const taskMutations: MutationResolvers = {
  async createTask(_, { data: taskData }) {
    const newTask = await prisma.task.create({
      data: {
        name: taskData.name,
        toDo: { connect: { id: taskData.toDoId } },
      },
    });

    return newTask;
  },

  async updateTask(_, { id, data }) {
    const updatedTask = await prisma.task.update({ where: { id }, data });

    return updatedTask;
  },

  async deleteTask(_, { id }) {
    return await prisma.task.delete({ where: { id } });
  },
};
