import { connect } from 'react-redux';

import {
  ModalVals,
  ModalFuncs,
  ModalProps,
  Modal,
} from '../../components/Modal';

import {
  Portal,
  PortalProps,
  PortalVals,
  PortalFuncs
} from '../../components/Portal';

import {
  Post,
  PostProps,
  PostVals,
  PostFuncs
} from '../../components/Post';

import {
  Punctum,
  PunctumProps,
  PunctumVals,
  PunctumFuncs
} from '../../components/Punctum';

import {
  modalActions,
  postActions,
} from '../../store/portfolio/portfolio.actions';

import {
  selectAlt,
  selectVisible,
  selectTitle,
  selectWorkImages,
  selectShort,
  selectLong,
  selectLongPath,
  selectSrc,
} from '../../store/portfolio/portfolio.selectors';

import {
  selectBinBaseUrl,
} from '../../store/media/media.selectors';

import { StoreType } from '../../types';

const ModalContainer = connect<ModalVals, ModalFuncs, {}>
(
  (state: StoreType, props: ModalProps) => ({
    className: '',
    visible: selectVisible(state, props),
    title: selectTitle(state, props),
  }),
  (dispatch: Function, props: ModalProps) => ({
    hide: () => dispatch(
      modalActions.setModalHide(props.namespace)
    ),
    setLong: (data) => dispatch(
      postActions.setPostLong(props.namespace, data)
    ),
  })
)(Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, {}>
(
  (state: StoreType, props: PortalProps) => ({
    className: '',
    baseBinUrl: selectBinBaseUrl(state),
    images: selectWorkImages(state, props),
  }),
  (dispatch: Function, props: PortalProps) => ({})
)(Portal);

const PostContainer = connect<PostVals, PostFuncs, {}>
(
  (state: StoreType, props: PostProps) => ({
    className: '',
    imgs: selectWorkImages(state, props),
    short: selectShort(state, props),
    long: selectLong(state, props),
    longPath: selectLongPath(state, props),
  }),
  (dispatch: Function, props: PostProps) => ({
    setLong: (data) => dispatch(
      postActions.setPostLong(props.namespace, data)
    ),
  })
)(Post);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
(
  (state: StoreType, props: PunctumProps) => ({
    className: '',
    alt: selectAlt(state, props),
    src: selectSrc(state, props),
    title: selectTitle(state, props),
  }),
  (dispatch: Function, props: PunctumProps) => ({
    showModal: () => dispatch(
      modalActions.setModalShow(props.namespace)
    )
  })
)(Punctum);

export {
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
