import { connect } from 'react-redux';

import { Modal, ModalProps } from '../../../components/Modal';
import { Portal, PortalProps } from '../../../components/Portal';
import { Post, PostProps } from '../../../components/Post';
import { Punctum, PunctumProps } from '../../../components/Punctum';

import {
  mediaSelectors,
  modalSelectors,
  postSelectors,
  punctumSelectors,
} from '../../../store/works/works.selectors';

import {
  modalActions,
  postActions,
} from '../../../store/works/works.actions';

import { StoreType, ContainerType } from '../../../store/types';

const ModalContainer = connect<ModalProps, ModalProps, ContainerType>
  (
    (state: StoreType, props: ModalProps): ModalProps => (
      {
        ...props,
        visible: modalSelectors.selectVisible(state, props),
      }
    ),
    (dispatch: any, props: ModalProps): ModalProps => (
      {
        ...props,
        hide: () => dispatch(modalActions.setModalHide(props.namespace))
      }
    )
  )
  (Modal);

const PortalContainer = connect<PortalProps, PortalProps, ContainerType>
  (
    (state: StoreType, props: PortalProps): PortalProps => (
      {
        ...props,
        baseBinUrl: mediaSelectors.selectBinBaseUrl(state),
        images: mediaSelectors.selectImages(state, props),
      }
    )
  )
  (Portal);

const PostContainer = connect<PostProps, PostProps, ContainerType>
  (
    (state: StoreType, props: PostProps): PostProps => (
      {
        ...props,
        expanded: postSelectors.selectExpanded(state, props),
        short: postSelectors.selectShort(state, props),
        long: postSelectors.selectLong(state, props),
        title: postSelectors.selectTitle(state, props),
      }
    ),
    (dispatch: any, props: PostProps, ): PostProps => (
      {
        ...props,
        expand: () => dispatch(postActions.setPostLength(props.namespace))
      }
    )
  )(Post);


const PunctumContainer = connect<PunctumProps, PunctumProps, ContainerType>
  (
    (state: StoreType, props: PunctumProps): PunctumProps => (
      {
        ...props,
        alt: punctumSelectors.selectAlt(state, props),
        src: punctumSelectors.selectSrc(state, props),
      }
    ),
    (
      dispatch: any,
      props: PunctumProps
    ): PunctumProps => (
        {
          ...props,
          showModal: () => dispatch(modalActions.setModalShow(props.namespace)),
        }
      )
  )(Punctum);

export {
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
