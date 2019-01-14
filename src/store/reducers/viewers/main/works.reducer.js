import constants from '../../../constants';

import initialState from '../../../initialStore';
const { works } = initialState.viewers.main;

const {
  SET_VISIBILITY
} = constants;

module.exports = (state = works, action = {}) => {

  const { type, payload } = action;

  if (payload && payload.namespace && payload.value) {
    switch (type) {
      case SET_VISIBILITY: {
        const { namespace, value } = action.payload;
        const { [namespace]: subState } = state;
        return {
          ...state, [namespace]: { ...subState, visible: value }
        }
      }
      default: { return state; }
    }
  }

  return state;

};
