import 'modern-css-reset';
import React, { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ApolloProvider } from '@apollo/client';
// import { Helmet } from 'react-helmet';

import apollo from '../../apollo';
import { Navigation } from '../../components';

import './_app.scss';
import { BioType } from '../../types';

const config = {
  image: '/icons/icon.png',
  title: 'Howard Melnyczuk',
  twitterUsername: '@melnyczuk',
  url: 'https://melnycz.uk',
};

const SEO: FC<{ bio: BioType }> = ({ bio }) => {
  const { image, title, twitterUsername, url } = config;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://melnycz.uk" />
      <meta name="description" content={bio?.short} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={bio?.short} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={bio?.short} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

const _App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <ApolloProvider client={apollo}>
    <SEO bio={pageProps.bio} />
    <Navigation router={router} bio={pageProps.bio} />
    <Component {...pageProps} />
  </ApolloProvider>
);

export default _App;
