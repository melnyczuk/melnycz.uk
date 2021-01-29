// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'melnycz.uk',
    siteUrl: 'https://melnycz.uk',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
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
        url: 'https://melnyczuk-folio.herokuapp.com/graphql',
      },
    },
  ],
};
