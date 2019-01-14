import db from '../db/db';

module.exports = {
  nav: {
    buttons: [
      {
        label: 'about',
        path: '/about',
      }
    ]
  },
  viewers: {
    main: {
      works: db.works.reduce((map, work) => {
        return {
          ...map, [work.namespace]: {
            ...work,
            visible: false
          }
        }
      },
        {})
    }
  }
};
