import actionConstants from './constants';
import { ActionType } from '../types';
import { PostProps } from '../components/Post';
import { ModalProps } from '../components/Modal';
import { PunctumProps } from '../components/Punctum';

const {
  SET_ACTIVE,
  SET_DESC,
  SET_HIDE,
  SET_SHOW,
  SET_SITE_TITLE,
  SET_TITLE,
} = actionConstants;


const setActive = (active: string): ActionType =>
  ({ type: SET_ACTIVE, id: active, data: null });

const setDescription = ({ namespace }: PostProps, desc: string[]): ActionType => {
  console.log('set', desc);
  return { type: SET_DESC, id: namespace, data: desc };
};

const setHide = ({ namespace }: ModalProps): ActionType =>
  ({ type: SET_HIDE, id: namespace, data: null });

const setShow = ({ namespace }: PunctumProps): ActionType =>
  ({ type: SET_SHOW, id: namespace, data: null });

const setSiteTitle = (sitetitle: string): ActionType =>
  ({ type: SET_SITE_TITLE, id: sitetitle, data: null });

const setTitle = (title: string): ActionType =>
  ({ type: SET_TITLE, id: title, data: null });


export {
  setActive,
  setDescription,
  setHide,
  setShow,
  setSiteTitle,
  setTitle,
};
