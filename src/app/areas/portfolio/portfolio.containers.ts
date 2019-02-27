import { connect } from 'react-redux';

import {
  Modal,
  ModalProps,
  ModalVals,
  ModalFuncs
} from '../../../components/Modal';

import {
  Portal,
  PortalProps,
  PortalVals,
  PortalFuncs
} from '../../../components/Portal';

import {
  Post,
  PostProps,
  PostVals,
  PostFuncs
} from '../../../components/Post';

import {
  Punctum,
  PunctumProps,
  PunctumVals,
  PunctumFuncs
} from '../../../components/Punctum';

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
import { NavBarVals, NavBarFuncs, NavBar } from '../../../components/Nav';
import { selectSubNavLabels } from '../../../store/nav/nav.selectors';
import { setTitle } from '../../../store/about/about.actions';

const SubNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType) => ({
      className: '',
      buttonClassName: '',
      labels: selectSubNavLabels(state)
    }),
    (dispatch: Function) => ({
      // updateTitle: (title) => dispatch(setTitle(title)),
    })
  )(NavBar);

const ModalContainer = connect<ModalVals, ModalFuncs, ContainerType>
  (
    (state: StoreType, props: ModalProps) => ({
      className: '',
      visible: modalSelectors.selectVisible(state, props),
      long: postSelectors.selectLong(state, props),
      longPath: postSelectors.selectLongPath(state, props),
    }),
    (dispatch: Function, props: ModalProps) => ({
      hide: () => dispatch(modalActions.setModalHide(props.namespace)),
      setLong:
        (data) => dispatch(postActions.setPostLong(props.namespace, data)),
    })
  )(Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, ContainerType>
  (
    (state: StoreType, props: PortalProps) => ({
      className: '',
      baseBinUrl: mediaSelectors.selectBinBaseUrl(state),
      images: mediaSelectors.selectImages(state, props),
    }),
    (dispatch: Function, props: PortalProps) => ({})
  )(Portal);

const PostContainer = connect<PostVals, PostFuncs, ContainerType>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      short: postSelectors.selectShort(state, props),
      long: postSelectors.selectLong(state, props),
      longPath: postSelectors.selectLongPath(state, props),
      title: postSelectors.selectTitle(state, props),
    }),
    (dispatch: Function, props: PostProps) => ({
      setLong: (data) => dispatch(postActions.setPostLong(props.namespace, data)),
    })
  )(Post);


const PunctumContainer = connect<PunctumVals, PunctumFuncs, ContainerType>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: '',
      alt: punctumSelectors.selectAlt(state, props),
      src: punctumSelectors.selectSrc(state, props),
    }),
    (dispatch: Function, props: PunctumProps) => ({
      showModal: () => dispatch(modalActions.setModalShow(props.namespace))
    })
  )(Punctum);

export {
  SubNavContainer,
  ModalContainer,
  PortalContainer,
  PostContainer,
  PunctumContainer,
}
