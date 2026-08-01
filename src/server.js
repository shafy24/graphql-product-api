import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import app from "./app.js";
import connectDB from "./config/db.js";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

await connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { token };
  },
});

await server.start();
server.applyMiddleware({ app });
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}${server.graphqlPath}`,
  );
});
