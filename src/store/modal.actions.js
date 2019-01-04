import { SET_VISIBILITY } from './modal.constants';

export function setModalVisibility(payload = false) {
  if (payload === false) {
    return { type: SET_VISIBILITY, payload: false };
  }
  if (payload === true) {
    return { type: SET_VISIBILITY, payload: true }
  }
}

