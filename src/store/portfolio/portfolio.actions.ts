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

const setPostLong = (namespace: string, data: string[]): ActionType => (
  { type: SET_LONG, namespace, data }
);

export {
  setModalHide,
  setModalShow,
  setPostLength,
  setPostLong,
};
