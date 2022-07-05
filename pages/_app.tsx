// /pages/_app.tsx
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@libs/client/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
