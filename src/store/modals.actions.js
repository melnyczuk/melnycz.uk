export const SET_VISIBILITY = 'SET_VISIBILITY';

export function setModalVisibility(payload) {
  if (payload === false) {
    return { type: SET_VISIBILITY, payload: false };
  }
  if (payload === true) {
    return { type: SET_VISIBILITY, payload: true }
  }
}

