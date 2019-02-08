import { actionConstants } from '../../../constants';

import initialState from '../../../initialState';
import { Action, Works } from '../../../store.d';

const { works } = initialState.areas.primary;

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
} = actionConstants;

export default (state: Works = works, action: Action) => {

  const { type, namespace } = action;

  switch (type) {
    default: { return state; }

    case (SET_SHOW): {
      return Object.keys(state).reduce((next, key) => {
        if (key !== namespace) (
          { ...next, [key]: { ...state[key], visible: false } }
        );

        if (key === namespace) (
          { ...next, [key]: { ...state[key], visible: true } }
        );

        return next;
      }, {});
    }

    case (SET_HIDE): {
      return Object.keys(state).reduce((next, key: string) => {
        if (key === namespace) (
          { ...next, [key]: { ...state[key], visible: false } }
        );
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
