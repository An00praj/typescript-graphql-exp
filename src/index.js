const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    name: 'Gemini Osiris',
    author: 'geminiosiris@qmail.com',
    projects: [{title: 'Site Upgrade - Summer 2021'}]
  },
  {
    title: 'Capricorn Titus',
    email: 'capricorntitus@qmail.com',
    projects: [{title: 'Site Upgrade - Summer 2021'}]
  },
];

const typeDefs = gql`

  type User {
    name: String
    email: String
    projects: [Project]
  }

  type Project {
    title: String
    active: Boolean
    members: [User]
  }

  type Query {
    users: [User]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`Server listening at ${url}`);
})

