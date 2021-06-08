import 'modern-css-reset';
import React, { ComponentProps, FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { ApolloProvider } from '../../apollo';
import { Navigation, SEO } from '../../components';

import './_app.scss';

const metadata: ComponentProps<typeof SEO> = {
  description:
    'Howard Melnyczuk is an artist investigating technology as the site in which political structures are built and maintained.',
  image: '/icons/icon.png',
  title: 'Howard Melnyczuk',
  twitterUsername: '@melnyczuk',
  url: 'https://melnycz.uk',
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <ApolloProvider>
    <SEO {...metadata} />
    <Navigation router={router} description={metadata.description} />
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
