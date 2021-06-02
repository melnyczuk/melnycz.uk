import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        twitterUsername
      }
    }
  }
`;

const SEO: FC = () => {
  const data = useStaticQuery(seoQuery);

  const {
    description,
    image,
    title,
    twitterUsername,
    url,
  } = data.site.siteMetadata;

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'en',
      }}
    >
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
    </Helmet>
  );
};

export default SEO;
