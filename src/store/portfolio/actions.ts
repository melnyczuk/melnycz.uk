import { actionConstants } from '../constants';
import { ActionType } from '../../types';
import { PostProps } from '../../components/Post';
import { ModalProps } from '../../components/Modal';
import { PunctumProps } from '../../components/Punctum';

const {
  SET_SHOW,
  SET_HIDE,
  SET_DESC,
} = actionConstants;

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
  setDescription,
};
