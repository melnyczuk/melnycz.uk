import db from '../../db/db';

const initialState = {
  nav: {
    buttons: [
      {
        label: 'about',
        path: '/about',
      }
    ]
  },
  areas: {
    primary: {},
  },
  works: db.works.reduce((map, work) => {
    return {
      ...map, [work.namespace]: {
        ...work,
        visible: false
      }
    }
  },
    {})
};

export default initialState;
