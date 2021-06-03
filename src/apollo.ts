import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'http://localhost:5000/graphql';

const apollo = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apollo;
