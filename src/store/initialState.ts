import { 
  bio, 
  info, 
  media,
  works as dbWorks, 
} from '../../db/db.json';

import { WorksType } from './types.js';

const nav = { buttons: [ 'Art', 'Code' ] };

const works: WorksType = dbWorks.reduce((map, work) => ({
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
};
