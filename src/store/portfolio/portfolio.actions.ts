import { actionConstants } from '../constants';
import { ActionType } from '../../types';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
  SET_LONG,
} = actionConstants;

const modalActions = {

  setModalShow: (namespace: string): ActionType => (
    { type: SET_SHOW, namespace }
  ),

  setModalHide: (namespace: string): ActionType => (
    { type: SET_HIDE, namespace }
  ),

}

const postActions = {

  setPostLength: (namespace: string): ActionType => (
    { type: SET_LENGTH, namespace }
  ),

  setPostLong: (namespace: string, data: string): ActionType => (
    { type: SET_LONG, namespace, data }
  ),

}

export {
  modalActions,
  postActions,
};
