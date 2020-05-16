/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const { works } = require('./static/db/works.json');

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

const shaders = fs
  .readdirSync('./static/shaders/fragment')
  .map((filename) => filename.split('.')[0])
  .reduce(pageReducer('shaders'), { shaders: { page: '/shaders' } });

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
