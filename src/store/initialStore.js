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

export default initialState;
