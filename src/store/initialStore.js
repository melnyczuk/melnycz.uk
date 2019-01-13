import db from '../db/db';
const rootDir = '';

module.exports = {
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
          src: work.keyImg,
          alt: work.name,
          visible: false
        }
      })
    }
  }
}