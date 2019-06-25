import { actionConstants } from '../constants';
import { ActionType } from '../../types';
import { PostProps } from '../../components/Post';
import { ModalProps } from '../../components/Modal';
import { PunctumProps } from '../../components/Punctum';

const {
  SET_SHOW,
  SET_HIDE,
  SET_DESC,
  SET_TITLE,
} = actionConstants;

const setTitle = (title: string): ActionType => (
  { type: SET_TITLE, id: title, data: null }
);

const setShow = ({ namespace }: PunctumProps): ActionType => (
  { type: SET_SHOW, id: namespace, data: null }
);

const setHide = ({ namespace }: ModalProps): ActionType => (
  { type: SET_HIDE, id: namespace, data: null  }
);

const setDescription = ({ namespace }: PostProps, data: string[]): ActionType => (
  { type: SET_DESC, id: namespace, data }
);

export {
  setHide,
  setShow,
  setDescription,
};
