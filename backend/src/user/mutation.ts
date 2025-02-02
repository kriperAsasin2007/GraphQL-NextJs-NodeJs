import { PrismaClient } from '@prisma/client';
import { MutationResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const userMutations: MutationResolvers = {
  async createUser(_, args) {
    const user = args.data;
    return await prisma.user.create({
      data: user,
      include: {
        toDos: true,
      },
    });
  },

  async updateUser(_, args) {
    const updatedUserData = args.data;
    const updatedUser = await prisma.user.update({
      where: {
        id: args.id,
      },
      data: updatedUserData,
    });

    return updatedUser;
  },

  async deleteUser(_, args) {
    const deletedUser = await prisma.user.delete({
      where: {
        id: args.id,
      },
    });

    return deletedUser;
  },
};
