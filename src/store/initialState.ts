import db from '../../db/db.json';
import { WorksType } from './types.js';

const DEFAULT_AREA = 'portfolio';
const nav = { buttons: [ 'Art', 'Code' ] };

const { bio, info, media } = db;

const works: WorksType = db.works.reduce((map, work) => ({
  ...map,
  [work.namespace]: {
    ...work,
    visible: false,
  },
}),{});


export {
  bio,
  info,
  media,
  nav,
  works,
  DEFAULT_AREA,
};
