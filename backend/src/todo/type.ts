const todoTypeDefs = `#graphql

type ToDo {
    id: ID!
    name: String!
    userId: String!
    tasks: [Task!]
}

type Query {
    getToDos: [ToDo!]
    getToDo(id: ID!): ToDo
}

type Mutation {
    createToDo(data: CreateToDoInput!): ToDo!
    updateToDo(id: ID!, data: UpdateToDoInput!): ToDo!
    deleteToDo(id: ID!): ToDo!
}

input CreateToDoInput {
    name: String!
    ownerId: ID!
}

input UpdateToDoInput {
    name: String!
}
`;

export default todoTypeDefs;
