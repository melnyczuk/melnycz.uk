import { SET_VISIBILITY } from './modal.constants';
import { modalInitialState } from './modal.state';

export function modalReducer(state = modalInitialState, action) {

  if (action.type === SET_VISIBILITY) {
    return {
      ...state,
      visible: action.payload
    }
  }

  return state;
}
