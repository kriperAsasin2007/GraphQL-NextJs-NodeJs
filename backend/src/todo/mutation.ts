import { PrismaClient } from '@prisma/client';
import { MutationResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const toDoMutations: MutationResolvers = {
  async createToDo(_, { data }) {
    const newToDo = await prisma.toDo.create({
      data: {
        name: data.name,
        user: { connect: { id: data.ownerId } },
      },
    });
    return newToDo;
  },

  async updateToDo(_, { id, data }) {
    const updatedToDo = await prisma.toDo.update({
      where: {
        id,
      },
      data,
    });

    return updatedToDo;
  },

  async deleteToDo(_, { id }) {
    const deletedToDo = await prisma.toDo.delete({
      where: {
        id,
      },
    });
    return deletedToDo;
  },
};
