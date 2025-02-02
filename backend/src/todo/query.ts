import { PrismaClient } from '@prisma/client';
import { QueryResolvers } from '../../types/resolvers-types.js';

const prisma = new PrismaClient();

export const toDoQueries: QueryResolvers = {
  async getToDos() {
    return await prisma.toDo.findMany();
  },

  async getToDo(_, args) {
    return await prisma.toDo.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};

// export const toDoRelationsResolvers = {
//   Todo: {
//     user(parent) {
//       return prisma.user.findUnique({
//         where: {
//           id: parent.userId,
//         },
//       });
//     },
//   },
// };
