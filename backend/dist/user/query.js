import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const userQueries = {
    getUsers() {
        const users = prisma.user.findMany();
        console.log({ users });
        return users;
    },
};
//# sourceMappingURL=query.js.map