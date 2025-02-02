const userTypeDefs = `#graphql

type User {
    id: ID!
    username: String!
    email: String!
    toDos: [ToDo!]
}

type Query {
    getUsers: [User!]
    getUser(id: ID!): User
}

type Mutation {
    createUser(data: CreateUserInput!): User
    updateUser(id: ID!, data: UpdateUserInput!) : User
    deleteUser(id: ID!): User
}

input CreateUserInput {
    username: String!,
    email: String!
}

input UpdateUserInput {
    username: String!,
    email: String!
}
`;

export default userTypeDefs;
