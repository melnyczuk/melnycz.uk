import { connect } from 'react-redux';

import { Modal, ModalProps, ModalVals, ModalFuncs } from '../../../components/Modal';
import { Portal, PortalProps, PortalVals, PortalFuncs } from '../../../components/Portal';
import { Post, PostProps, PostVals, PostFuncs } from '../../../components/Post';
import { Punctum, PunctumProps, PunctumVals, PunctumFuncs } from '../../../components/Punctum';

import {
  mediaSelectors,
  modalSelectors,
  postSelectors,
  punctumSelectors,
} from '../../../store/works/works.selectors';

import {
  modalActions, postActions,
} from '../../../store/works/works.actions';

import { StoreType, ContainerType } from '../../../store/types';



const ModalContainer = connect<ModalVals, ModalFuncs, ContainerType>
  (
    (state: StoreType, props: ModalProps) => ({
      visible: modalSelectors.selectVisible(state, props),
      long: postSelectors.selectLong(state, props),
      longPath: postSelectors.selectLongPath(state, props),
    }),
    (dispatch: any, props: ModalProps) => ({
      hide: () => dispatch(modalActions.setModalHide(props.namespace)),
      setLong: (data) => dispatch(postActions.setPostLong(props.namespace, data)),
    })
  )
  (Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, ContainerType>
  (
    (state: StoreType, props: PortalProps) => ({
      baseBinUrl: mediaSelectors.selectBinBaseUrl(state),
      images: mediaSelectors.selectImages(state, props),
    }),
    (dispatch: any, props: PortalProps) => ({})
  )
  (Portal);

const PostContainer = connect<PostVals, PostFuncs, ContainerType>
  (
    (state: StoreType, props: PostProps) => ({
      short: postSelectors.selectShort(state, props),
      long: postSelectors.selectLong(state, props),
      longPath: postSelectors.selectLongPath(state, props),
      title: postSelectors.selectTitle(state, props),
    }),
    (dispatch: any, props: PostProps) => ({
      setLong: (data) => dispatch(postActions.setPostLong(props.namespace, data)),
    })
  )(Post);


const PunctumContainer = connect<PunctumVals, PunctumFuncs, ContainerType>
  (
    (state: StoreType, props: PunctumProps) => ({
      alt: punctumSelectors.selectAlt(state, props),
      src: punctumSelectors.selectSrc(state, props),
    }),
    (dispatch: any, props: PunctumProps) => ({
      showModal: () => dispatch(modalActions.setModalShow(props.namespace))
    })
  )(Punctum);

export {
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
