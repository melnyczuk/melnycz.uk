import db from '../../db/db.json';
import { StoreState } from './store.d';

export const WORKS_BIN_BASE = '../bin';
export const DEFAULT_AREA = 'primary'

const initialState: StoreState = {
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
    active: DEFAULT_AREA,
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
