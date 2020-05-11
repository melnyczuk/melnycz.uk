/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const { works } = require('./static/db/works.json');

module.exports = withSass({
  exportPathMap() {
    const portfolioWorks = works
      .filter(({ live }) => live)
      .reduce(
        (portfolio, { namespace }) => ({
          ...portfolio,
          [`/portfolio/${namespace}`]: { page: '/portfolio/[work]' },
        }),
        {}
      );

    return {
      '/': { page: '/' },
      cv: { page: '/cv' },
      about: { page: '/about' },
      portfolio: { page: '/portfolio' },
      ...portfolioWorks,
    };
  },
  webpack(config) {
    return config;
  },
});
