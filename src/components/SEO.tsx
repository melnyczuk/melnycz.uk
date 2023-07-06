import Head from 'next/head';
import { FC } from 'react';

import { metadata } from '../content';

const SEO: FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>{metadata.website.title}</title>
    <link rel="canonical" href={metadata.website.url} />
    <link rel="shortcut icon" href={metadata.website.image} />
    <meta name="description" content={metadata.website.body} />
    <meta name="image" content={metadata.website.image} />
    <meta property="og:url" content={metadata.website.url} />
    <meta property="og:title" content={metadata.website.title} />
    <meta property="og:description" content={metadata.website.body} />
    <meta property="og:image" content={metadata.website.image} />
    <meta name="twitter:card" content="metadata.website.summary_large_image" />
    <meta name="twitter:creator" content={metadata.website.handle} />
    <meta name="twitter:title" content={metadata.website.title} />
    <meta name="twitter:description" content={metadata.website.body} />
    <meta name="twitter:image" content={metadata.website.image} />
  </Head>
);

export default SEO;
