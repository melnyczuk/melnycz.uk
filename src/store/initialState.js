import db from '../../db/db';

const initialState = {
  nav: {
    buttons: [
      {
        label: 'About',
        path: '/about',
      },
      {
        label: 'Works',
        path: '/works'
      }
    ]
  },
  areas: {
    active: 'primary',
    primary: {
      works: db.works.reduce((map, work) => {
        return {
          ...map, [work.namespace]: {
            ...work,
            visible: false
          }
        }
      },
        {}),
    },
  },
};

export default initialState;
