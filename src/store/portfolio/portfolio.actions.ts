import { actionConstants } from '../constants';
import { ActionType } from '../../types';
import { PostProps } from '../../components/Post';
import { ModalProps } from '../../components/Modal';
import { PunctumProps } from '../../components/Punctum';

const {
  SET_SHOW,
  SET_HIDE,
  SET_LENGTH,
  SET_LONG,
} = actionConstants;

const setModalShow = ({ namespace }: PunctumProps): ActionType => (
  { type: SET_SHOW, namespace }
);

const setModalHide = ({ namespace }: ModalProps): ActionType => (
  { type: SET_HIDE, namespace }
);

const setPostLength = ({ namespace }: PostProps): ActionType => (
  { type: SET_LENGTH, namespace }
);

// const setPostLong = ({namespace}: PostProps): ActionType => (
//   { type: SET_LONG, namespace }
// );

export {
  setModalHide,
  setModalShow,
  setPostLength,
  // setPostLong,
};
