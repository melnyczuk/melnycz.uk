export const SET_VISIBILITY = 'SET_VISIBILITY';

export const modalInitialState = {}

// ACTION CREATORS

export function setModalVisibility(payload) {
  if (payload.namespace){
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
      [action.payload.namespace]: {
        visible: action.payload.value
      }
    }
  }
  return state;
}

// SELECTORS
export function selectModalVisibility(state, namespace) {
  if (state && state.hasOwnProperty(namespace)){
    const { visible } = state[namespace];
    return visible;
  };
  return false;
}