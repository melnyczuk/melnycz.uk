/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const { works } = require('./static/db/works.json');

const about = { about: { page: '/about' } };

const cv = { cv: { page: '/cv' } };

const portfolio = works
  .filter(({ live }) => live)
  .reduce(
    (folio, { namespace }) => ({
      ...folio,
      [`/portfolio/${namespace}`]: { page: '/portfolio/[work]' },
    }),
    { portfolio: { page: '/portfolio' } }
  );

module.exports = withSass({
  webpack: (config) => config,
  exportPathMap: () => ({
    '/': { page: '/' },
    ...cv,
    ...about,
    ...portfolio,
  }),
});
