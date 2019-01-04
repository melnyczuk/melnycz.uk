import { SET_VISIBILITY } from './modals.constants';
import { modalInitialState } from './modals.state';

export function modalReducer(state = modalInitialState, action) {

  if (action.type === SET_VISIBILITY) {
    return {
      ...state,
      visible: action.payload
    }
  }

  return state;
}
