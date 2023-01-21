import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { graphql } from '../../.gql';

let link = null;

if (typeof window === 'undefined') {
  const mesh = await import('.mesh').then(({ getBuiltMesh }) => getBuiltMesh());
  const MeshApolloLink = (await import('./apollo/meshLink')).MeshApolloLink;

  link = ApolloLink.from([new MeshApolloLink(mesh)]);
} else {
  link = ApolloLink.from([
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_LOCAL_ENDPOINT,
    }),
  ]);
}

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export const gql = graphql;
