import { works } from '../initialState';
import { actionConstants } from '../constants';

import { ActionType, WorksType } from '../types';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
} = actionConstants;

export default (state: WorksType = works, action: ActionType) => {
  
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
