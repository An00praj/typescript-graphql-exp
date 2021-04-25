const { gql } =  require('apollo-server');

const typeDefs = () => {
    return gql`

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
}

exports.typeDefs = typeDefs;