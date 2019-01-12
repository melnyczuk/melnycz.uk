export const SET_VISIBILITY = 'SET_VISIBILITY';

export const modalInitialState = {
  visible: false
}

// ACTION CREATORS

export function setModalVisibility(payload = false) {
  if (payload === true) {
    return { type: SET_VISIBILITY, payload: true }
  }
  return { type: SET_VISIBILITY, payload: false };
}

// REDUCERS
export function modalReducer(state = modalInitialState, action) {
  if (action.type === SET_VISIBILITY) {
    if (action.payload === undefined) {
      return {
        ...state,
        visible: !state.visible
      }
    }
    return {
      ...state,
      visible: action.payload
    }
  }
  return state;
}

// SELECTORS
export function selectModalVisibility(state, hash) {
  if (hash) {
    return state[hash].visible;
  }
  return state.visible
}
