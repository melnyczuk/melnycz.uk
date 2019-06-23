import { connect } from 'react-redux';

import {
  Modal,
  ModalProps,
  ModalVals,
  ModalFuncs,
} from '../../components/Modal';

import {
  Portal,
  PortalProps,
  PortalVals,
  PortalFuncs,
} from '../../components/Portal';

import {
  Post,
  PostProps,
  PostVals,
  PostFuncs,
} from '../../components/Post';

import {
  Punctum,
  PunctumProps,
  PunctumVals,
  PunctumFuncs,
} from '../../components/Punctum';

import {
  setHide,
  setDescription,
  setShow
} from '../../store/portfolio/actions';

import {
  selectAlt,
  selectVisible,
  selectTitle,
  selectMedia,
  selectDescription,
} from '../../store/portfolio/selectors';

import { StoreType } from '../../types';
import { selectBaseUrl } from '../../store/media/selectors';

const ModalContainer = connect<ModalVals, ModalFuncs, {}>
  (
    (state: StoreType, props: ModalProps) => ({
      className: '',
      visible: selectVisible(state, props),
      title: selectTitle(state, props),
    }),
    (dispatch: Function, props: ModalProps) => ({
      hide: () => dispatch(setHide(props)),
    })
  )(Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, {}>
  (
    (state: StoreType, props: PortalProps) => ({
      className: '',
      baseUrl: selectBaseUrl(state, props),
      images: selectMedia.images(state, props),
    }),
    (dispatch: Function, props: PortalProps) => ({})
  )(Portal);

const PostContainer = connect<PostVals, PostFuncs, {}>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      images: selectMedia.images(state, props),
      baseUrl: selectBaseUrl(state, props),
      description: selectDescription(state, props),
    }),
    (dispatch: Function, props: PostProps) => ({
      setDesc: (data: string[]) => dispatch(setDescription(props, data)),
    })
  )(Post);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: 'punctum-image',
      image: selectMedia.punctum(state, props),
      baseUrl: selectBaseUrl(state, props),
      title: selectTitle(state, props),
    }),
    (dispatch: Function, props: PunctumProps) => ({
      show: () => dispatch(setShow(props)),
    })
  )(Punctum);

export {
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
