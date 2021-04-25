const users = require('../../database/mockdb').users();

const resolvers = () => {
  return {
    Query: {
      users: () => users,
    },
  };
}

exports.resolvers = resolvers;