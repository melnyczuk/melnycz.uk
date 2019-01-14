import db from '../db/db';
const rootDir = '';

export default {
  nav:{
    buttons: [
      {
        label: 'about',
        path: '/about',
      }
    ]
  },
  viewers: {
    main: {
      elements: db.works.map(work => {
        return {
          [work.namespace]: {
          src: work.keyImg,
          alt: work.name,
          visible: false
        }
        }
      })
    }
  }
};
