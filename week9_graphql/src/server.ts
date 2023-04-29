import mongoose, { mongo } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import body_parser_pkg from 'body-parser';
const { json } = body_parser_pkg;
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import typeDefs from './schema';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import router from '../routes/personRoute';
import { people, addresses } from './data';
import Person from './resolvers/Person';
import Address from './resolvers/Address';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});

interface MyContext {
  people: typeof people;
  addresses: typeof addresses;
}

const resolvers = {
  Query,
  Mutation,
  Person,
  Address
};

const app = express();

const DB = process.env.DATABASE_DEV!
  .replace('<password>', process.env.DATABASE_PASSWORD!)
  .replace('<username>', process.env.DATABASE_USERNAME!)

const httpServer = http.createServer(app)

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

if (json) {
  app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server, {
    context: async () => ({ people, addresses }),
  }));
}

mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

app.use('/api/users', router);
console.log(`🚀 Users API ready at http://localhost:4000/api/users`)