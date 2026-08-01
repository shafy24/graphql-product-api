import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    image: String
    createdBy: User
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    products: [Product]
    product(id: ID!): Product
    me: User
  }
  type Mutation {
    register(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createProduct(
      name: String!
      price: Float!
      description: String
      image: String
    ): Product
    updateProduct(
      id: ID!
      name: String
      price: Float
      description: String
      image: String
    ): Product
    deleteProduct(id: ID!): String
  }
`;

export default typeDefs;
