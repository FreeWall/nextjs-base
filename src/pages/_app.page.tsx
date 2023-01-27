import { apolloClient } from '@/utils/apollo';
import { getMessages, IntlProvider } from '@/utils/intl';
import { trpc } from '@/utils/trpc';
import { ApolloProvider } from '@apollo/client';
import type { AppType } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

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
        <IntlProvider
          messages={getMessages(locale)}
          locale={locale as string}
          defaultLocale={defaultLocale}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
