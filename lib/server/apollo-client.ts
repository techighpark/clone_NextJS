import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:3000",
  cache: new InMemoryCache(),
});

export default client;
