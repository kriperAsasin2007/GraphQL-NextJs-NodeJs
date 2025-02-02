import { ToDo } from '../todo/type.js';
export const userTypeDefs = `#graphql

type User {
    id: ID!
    username: String!
    email: String!
    todos: [${ToDo}]!
}

type Query {
    getUsers: [User!]
    getUser(id: ID!): User! 
}

type Mutation {
    createUser(data: createUserInput!): User
    updateUser(data: updateUserInput!) : User
    deleteUser(id: ID!): User
}

input createUserInput {
    username: String!,
    email: String!
}

input updateUserInput {
    username: String,
    email: String
}
`;
//# sourceMappingURL=type.js.map