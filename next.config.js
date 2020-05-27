/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const { works, shaders } = require('./static/info.json');

function pageReducer(route) {
  return (acc, name) => ({
    ...acc,
    [`/${route}/${name}`]: { page: `/${route}/[page]` },
  });
}

const about = { about: { page: '/about' } };

const cv = { cv: { page: '/cv' } };

const portfolio = works.reduce(pageReducer('portfolio'), {
  portfolio: { page: '/portfolio' },
});

const shaderpages = shaders.reduce(pageReducer('shaders'), {
  shaders: { page: '/shaders' },
});

const systems = { systems: { page: '/systems' } };

module.exports = withSass({
  webpack: (config) => config,
  exportPathMap: () => ({
    '/': { page: '/' },
    ...cv,
    ...about,
    ...portfolio,
    ...shaderpages,
    ...systems,
  }),
});
