/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const { navlabels } = require('./static/db/info.json');
const { works } = require('./static/db/works.json');

module.exports = withSass({
  exportPathMap() {
    const paths = {
      '/': { page: '/' },
      cv: { page: '/cv' },
    };

    navlabels.forEach((area) => {
      paths[`/${area}`] = { page: '/[area]' };
    });

    works
      .filter(({ live }) => live)
      .forEach(({ namespace, area }) => {
        paths[`/${area}/${namespace}`] = { page: '/[area]/[namespace]' };
      });

    return paths;
  },
  webpack(config) {
    return config;
  },
});
