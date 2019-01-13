export const SET_VISIBILITY = 'SET_VISIBILITY';

export const modalInitialState = {}

// ACTION CREATORS

export function setModalVisibility(payload) {
  if (payload.key){
    if (payload.value === false) {
      return { type: SET_VISIBILITY, payload };
    }
    if (payload.value === true) {
      return { type: SET_VISIBILITY, payload }
    }
  }
}

// REDUCERS
export function reduceModal(state = modalInitialState, action) {
  if (action.type === SET_VISIBILITY) {
    return {
      ...state,
      [action.payload.key]: {
        visible: action.payload.value
      }
    }
  }
  return state;
}

// SELECTORS
export function selectModalVisibility(state, key) {
  if (state && state.hasOwnProperty(key)){
    const { visible } = state[key];
    return visible;
  };
  return false;
}
