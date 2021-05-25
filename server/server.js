const express = require('express');
const app = express();


const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

//  ---- ----

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf-8'}));
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.applyMiddleware({ app, path: '/graphql' });

//  ---- ----

const port = 500;

app.listen( port, () => console.log(`Server runs on port ${port}`) );
