import 'modern-css-reset';
import React, { FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { ApolloProvider } from '../../apollo';
import { Navigation, SEO } from '../../components';

import './_app.scss';

const config = {
  image: '/icons/icon.png',
  title: 'Howard Melnyczuk',
  twitterUsername: '@melnyczuk',
  url: 'https://melnycz.uk',
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <ApolloProvider>
    <SEO bio={pageProps?.bio} {...config} />
    <Navigation router={router} bio={pageProps?.bio} />
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
