import { actionConstants } from '../constants';
import { ActionType } from '../../types';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
  SET_LONG,
} = actionConstants;

const setModalShow = (namespace: string): ActionType => (
  { type: SET_SHOW, namespace }
);

const setModalHide = (namespace: string): ActionType => (
  { type: SET_HIDE, namespace }
);

const setPostLength = (namespace: string): ActionType => (
  { type: SET_LENGTH, namespace }
);

const setPostDesc = (namespace: string): ActionType => (
  { type: SET_LONG, namespace }
);

export {
  setModalHide,
  setModalShow,
  setPostLength,
  setPostDesc,
};
