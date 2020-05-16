/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const { works } = require('./static/db/works.json');
const shadersNames = require('./static/shaders/index.json');

function pageReducer(route) {
  return (acc, name) => ({
    ...acc,
    [`/${route}/${name}`]: { page: `/${route}/[page]` },
  });
}

const about = { about: { page: '/about' } };

const cv = { cv: { page: '/cv' } };

const portfolio = works
  .filter(({ live }) => live)
  .map(({ namespace }) => namespace)
  .reduce(pageReducer('portfolio'), { portfolio: { page: '/portfolio' } });

const shaders = shadersNames.reduce(pageReducer('shaders'), {
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
    ...shaders,
    ...systems,
  }),
});
