import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { graphql } from '../../.gql';

const link = ApolloLink.from([
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }),
]);

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const gql = graphql;
