import fs from 'fs';
import { StoreType } from './types';

export const WORKS_BIN_BASE = '../bin';
export const DEFAULT_AREA = 'primary'

const db = JSON.parse(fs.readFileSync('../../db/db.json', 'utf8'));

const initialState: StoreType = {
    nav: {
      title: 'hi',
      buttons: [
        'About',
        'Works',
      ],
    },
    areas: {
      active: DEFAULT_AREA,
      portfolio: null,
      research: null,
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
