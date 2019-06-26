import { actionConstants } from './constants';
import { ActionType } from '../types';
import { PostProps } from '../components/Post';
import { ModalProps } from '../components/Modal';
import { PunctumProps } from '../components/Punctum';

const {
  SET_ACTIVE,
  SET_SHOW,
  SET_HIDE,
  SET_DESC,
  SET_TITLE,
} = actionConstants;

const setActive = (active: string): ActionType =>
  ({type: SET_ACTIVE, id: active, data: null});

const setTitle = (title: string): ActionType =>
  ({ type: SET_TITLE, id: title, data: null });

const setShow = ({ namespace }: PunctumProps): ActionType =>
  ({ type: SET_SHOW, id: namespace, data: null });

const setHide = ({ namespace }: ModalProps): ActionType =>
  ({ type: SET_HIDE, id: namespace, data: null  });

const setDescription = ({ namespace }: PostProps, desc: string[]): ActionType =>
  ({ type: SET_DESC, id: namespace, data: desc });

export {
  setActive,
  setHide,
  setShow,
  setDescription,
  setTitle,
};
