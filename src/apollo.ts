import { FC } from 'react';
import { GetStaticProps } from 'next';
import {
  ApolloClient,
  ApolloProvider as AP,
  InMemoryCache,
  gql,
  DocumentNode,
} from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://foliomelnyczuk.herokuapp.com/graphql';

const apollo = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export const getGetStaticProps = <T>(
  query: DocumentNode
): GetStaticProps<T> => async () => {
  const { data } = await apollo.query({
    query: gql`
      ${query}
    `,
  });
  return { props: data };
};

export const ApolloProvider: FC = ({ children }) =>
  AP({ client: apollo, children });
