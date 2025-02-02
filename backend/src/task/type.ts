const taskTypeDefs = `#graphql

type Task {
    id: ID!
    name: String!
    toDoId: ID!
}

type Query {
    getTasks: [Task!]
    getTask(id: ID!): Task
}

type Mutation {
    createTask(data: CreateTaskInput!) : Task!
    updateTask(id: ID!, data: UpdateTaskInput!) : Task!
    deleteTask(id: ID!): Task!
}

input CreateTaskInput {
    name: String!
    toDoId: ID!
}

input UpdateTaskInput {
    name: String!
}
`;

export default taskTypeDefs;
