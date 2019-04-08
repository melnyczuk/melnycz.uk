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
  setModalHide,
  setPostDesc,
  setModalShow
} from '../../store/portfolio/portfolio.actions';

import {
  selectAlt,
  selectVisible,
  selectTitle,
  selectWorkMedia,
  selectDescription,
  selectPunctumSrc,
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
    (dispatch: Function, { namespace }: ModalProps) => ({
      hide: () => dispatch(setModalHide(namespace)),
    })
  )(Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, {}>
  (
    (state: StoreType, props: PortalProps) => ({
      className: '',
      baseBinUrl: selectBinBaseUrl(state),
      images: selectWorkMedia.images(state, props),
    }),
    (dispatch: Function, props: PortalProps) => ({})
  )(Portal);

const PostContainer = connect<PostVals, PostFuncs, {}>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      imgs: selectWorkMedia.images(state, props),
      desc: selectDescription(state, props),
    }),
    (dispatch: Function, { namespace }: PostProps) => ({
      setDesc: (data: string[]) => dispatch(setPostDesc(namespace, data)),
    })
  )(Post);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: '',
      alt: selectAlt(state, props),
      src: selectPunctumSrc(state, props),
      title: selectTitle(state, props),
    }),
    (dispatch: Function, { namespace }: PunctumProps) => ({
      showModal: () => dispatch(setModalShow(namespace)),
    })
  )(Punctum);

export {
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
