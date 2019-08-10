const withSass = require('@zeit/next-sass');

module.exports = withSass({
  target: 'serverless',
  webpack(config, options) { return config; }
});
