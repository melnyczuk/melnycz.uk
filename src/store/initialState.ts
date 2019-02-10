import db from '../../db/db.json';
import { StoreState } from './store.d';

export const WORKS_BIN_BASE = '../bin';
export const DEFAULT_AREA = 'primary'

const initialState: StoreState = {
  nav: {
    buttons: [ 
      'About',
      'Works',
    ],
  },
  areas: {
    active: DEFAULT_AREA,
    primary: {},
  },
  works: db.works.reduce((map, work) => ({
    ...map,
    [work.namespace]: {
      ...work,
      visible: false,
    },
  }),
  {}),
  media: {
    baseBinUrl: WORKS_BIN_BASE,
  }
};

export default initialState;
