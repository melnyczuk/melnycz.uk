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

import {
  selectBinBaseUrl,
} from '../../store/media/selectors';

import { StoreType } from '../../types';

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
      baseURL: selectBinBaseUrl(state),
      images: selectMedia.images(state, props),
    }),
    (dispatch: Function, props: PortalProps) => ({})
  )(Portal);

const PostContainer = connect<PostVals, PostFuncs, {}>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      baseURL: selectBinBaseUrl(state),
      imgs: selectMedia.images(state, props),
      description: selectDescription(state, props),
    }),
    (dispatch: Function, props: PostProps) => ({
      setDesc: (data: string[]) => dispatch(setDescription(props, data)),
    })
  )(Post);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: '',
      baseURL: selectBinBaseUrl(state),
      img: selectMedia.punctum(state, props),
      alt: selectAlt(state, props),
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
