import Head from 'next/head';
import { FC } from 'react';

type SEOProps = Record<
  'description' | 'image' | 'title' | 'twitterUsername' | 'url',
  string
>;

const SEO: FC<SEOProps> = ({
  description,
  image,
  twitterUsername,
  title,
  url,
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href="https://melnycz.uk" />
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Head>
);

export default SEO;
