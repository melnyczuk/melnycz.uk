import constants from '../../../constants';

import initialState from '../../../initialStore';
const { works } = initialState.areas.primary;

const {
  SET_VISIBILE
} = constants;

export default (state = works, action = {}) => {

  const { type, payload } = action;

  switch (type) {

    case SET_VISIBILE: {
      return Object.keys(state).reduce((next, key) => {
        if (key !== payload) next[key] = { ...state[key], visible: false }
        if (key === payload) next[key] = { ...state[key], visible: true }
        return next;
      }, {});
    }

    default: { return state; }

  }

  return state;

};
