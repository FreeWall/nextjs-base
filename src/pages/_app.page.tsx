import CS from '@/locale/cs.json';
import EN from '@/locale/en.json';
import { apolloClient } from '@/utils/apollo';
import { trpc } from '@/utils/trpc';
import { ApolloProvider } from '@apollo/client';
import type { AppType } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof EN;
    }
  }
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  const messages = useMemo(() => {
    switch (locale) {
      case 'en':
        return EN;
      case 'cs':
        return CS;
      default:
        return EN;
    }
  }, [locale]);

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
          messages={messages}
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
