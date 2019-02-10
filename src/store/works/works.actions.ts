import { actionConstants } from '../constants';
import { ActionType } from '../types';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
} = actionConstants;

const modalActions = {
  setModalShow: (namespace: string): ActionType => ({ type: SET_SHOW, namespace }),
  setModalHide: (namespace: string): ActionType => ({ type: SET_HIDE, namespace }),
}

const postActions = {
  setPostLength: (namespace: string): ActionType => ({ type: SET_LENGTH, namespace }),
}

export { 
  modalActions, 
  postActions,
};
