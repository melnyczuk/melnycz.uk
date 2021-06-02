// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    description: 'The portfolio website of Howard Melnyczuk',
    image: 'src/images/icon.png',
    title: 'melnycz.uk',
    twitterUsername: '@melnyczuk',
    url: 'https://melnycz.uk',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'FolioSchema',
        fieldName: 'folio',
        url: 'https://foliomelnyczuk.herokuapp.com/graphql',
      },
    },
  ],
};
