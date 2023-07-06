import Head from 'next/head';
import { FC } from 'react';

import { metadata } from '../content';

const SEO: FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>{metadata.title}</title>
    <link rel="canonical" href={metadata.url} />
    <link rel="shortcut icon" href={metadata.image} />
    <meta name="description" content={metadata.body} />
    <meta name="image" content={metadata.image} />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.body} />
    <meta property="og:image" content={metadata.image} />
    <meta name="twitter:card" content="metadata.summary_large_image" />
    <meta name="twitter:creator" content={metadata.handle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.body} />
    <meta name="twitter:image" content={metadata.image} />
  </Head>
);

export default SEO;
