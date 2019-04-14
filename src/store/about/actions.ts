import { actionConstants } from '../constants';
import { ActionType } from '../../types';
import { PostProps } from '../../components/Post';
import { PunctumProps } from '../../components/Punctum';
import { ModalProps } from '../../components/Modal';

const {
  SET_TITLE,
  SET_DESC,
  SET_SHOW,
  SET_HIDE,
} = actionConstants;

const setTitle = (title: string): ActionType => (
  { type: SET_TITLE, namespace: title }
);

const setShow = ({ namespace }: PunctumProps): ActionType => (
  { type: SET_SHOW, namespace }
);

const setHide = ({ namespace }: ModalProps): ActionType => (
  { type: SET_HIDE, namespace }
);

const setDescription = ({ namespace }: PostProps, data: string[]): ActionType => (
  { type: SET_DESC, namespace, data }
);

export {
  setHide,
  setShow,
  setTitle,
  setDescription,
};
