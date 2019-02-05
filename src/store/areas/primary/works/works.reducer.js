import { actionConstants } from '../../../constants';

import initialState from '../../../initialState';

const { works } = initialState.areas.primary;

const {
  SET_VISIBLE,
} = actionConstants;

export default (state = works, action = {}) => {
  const { type, namespace } = action;

  switch (type) {
    case (SET_VISIBLE): {
      return Object.keys(state).reduce((next, key) => {
        if (key !== namespace) return { ...next, [key]: { ...state[key], visible: false } };
        if (key === namespace) return { ...next, [key]: { ...state[key], visible: true } };
        return next;
      }, {});
    }

    default: { return state; }
  }
};
