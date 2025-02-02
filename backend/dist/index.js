import { ApolloServer } from '@apollo/server';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { userQueries } from './user/query.js';
import { userTypeDefs } from './user/type.js';
dotenv.config();
async function bootstrap() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: [userTypeDefs],
        resolvers: {
            Query: {
                ...userQueries,
            },
        },
    });
    await server.start();
    app.use('/graphql', bodyParser.json(), expressMiddleware(server));
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server started on port: ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=index.js.map