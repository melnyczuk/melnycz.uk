import db from '../../../db/db.json';
import { ActionType, WorksType } from '../types';

import { actionConstants } from '../constants';
const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
} = actionConstants;

const works: WorksType = db.works.reduce((map, work) => ({
  ...map,
  [work.namespace]: {
    ...work,
    visible: false,
  },
}),{});

export default (state: WorksType = works, action: ActionType) => {

  if (!action) {
    return state;
  }

  const { type, namespace } = action;

  switch (type) {

    default: { return state; }

    case (SET_SHOW): {
      return Object.keys(state).reduce((next: object, key: string) => {
        if (key !== namespace) {
          return { ...next, [key]: { ...state[key], visible: false } }
        }

        if (key === namespace) {
          return { ...next, [key]: { ...state[key], visible: true } }
        }

        return next;
      }, {});
    }

    case (SET_HIDE): {
      return Object.keys(state).reduce((next, key: string) => {
        if (key === namespace) {
          return { ...next, [key]: { ...state[key], visible: false } }
        }

        return next;
      }, {});
    }

    case (SET_LENGTH): {
      return Object.keys(state).reduce((next, key: string) => {
        if(key === namespace) (
          {
            ...next,
            [key]: {
              ...state[key],
              description: {
                expanded: !state[key].description.expanded,
              }
            }
          }
        );
        return next;
      }, {});
    }

  }

};
