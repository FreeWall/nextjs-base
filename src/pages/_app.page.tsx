import { apolloClient } from '@/utils/apollo';
import { trpc } from '@/utils/trpc';
import { ApolloProvider } from '@apollo/client';
import type { AppType } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
