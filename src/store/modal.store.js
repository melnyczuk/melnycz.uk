export const SET_VISIBILITY = 'SET_VISIBILITY';

export const modalInitialState = {
  visible: false
}

// ACTION CREATORS

export function setModalVisibility(payload = false) {
  if (payload === false) {
    return { type: SET_VISIBILITY, payload: false };
  }
  if (payload === true) {
    return { type: SET_VISIBILITY, payload: true }
  }
}

// REDUCERS
export function modalReducer(state = modalInitialState, action) {
  if (action.type === SET_VISIBILITY) {
    return {
      ...state,
      visible: action.payload
    }
  }
  return state;
}

// SELECTORS
export function selectModalVisibility(state) {

}
