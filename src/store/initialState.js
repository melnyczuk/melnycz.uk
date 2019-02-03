import db from '../../db/db';

const WORKS_BIN_BASE = '../bin';

const initialState = {
  nav: {
    buttons: [
      {
        label: 'About',
        path: '/about',
      },
      {
        label: 'Works',
        path: '/works',
      },
    ],
  },
  areas: {
    active: 'primary',
    primary: {
      baseBinUrl: WORKS_BIN_BASE,
      works: db.works.reduce((map, work) => ({
        ...map,
        [work.namespace]: {
          ...work,
          visible: false,
        },
      }),
      {}),
    },
  },
};

export default initialState;
