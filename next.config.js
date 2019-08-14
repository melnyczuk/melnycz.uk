const withSass = require('@zeit/next-sass');
const { navlabels } = require('./static/db/info.json');
const { works } = require('./static/db/works.json');

module.exports = withSass({
    exportPathMap () {
    let paths = { 
      '/': { page: '/' }, 
      'cv': { page: '/cv'} 
    };

    navlabels.forEach(area => {
      paths[`/${area}`] = { page: '/[area]', query: { area } }
    });

    works.filter(({ live }) => live)
      .forEach(({ namespace, area }) => {
        paths[`/${area}/${namespace}`] = {
          page: '/[area]/[namespace]', query: { area, namespace }
        }
      });

    return paths;
  },
    webpack(config, options) { return config; },
});
