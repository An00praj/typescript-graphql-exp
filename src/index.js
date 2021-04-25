const { ApolloServer, gql } = require('apollo-server');
const users = require('../database/mockdb').users();
const typeDefs = require('./graphql/schema').typeDefs();
const resolvers = require('./graphql/resolvers').resolvers();

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`Server listening at ${url}`);
})

