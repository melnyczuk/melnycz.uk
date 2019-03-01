import { connect } from 'react-redux';

import {
  Modal,
  ModalProps,
  ModalVals,
  ModalFuncs
} from '../../components/Modal';

import {
  NavBarVals,
  NavBarFuncs,
  NavBar,
  NavBarProps
} from '../../components/Nav';

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
  selectSubNavLabels,
} from '../../store/nav/nav.selectors';

import {
  modalActions,
  postActions,
} from '../../store/works/works.actions';

import {
  mediaSelectors,
  modalSelectors,
  postSelectors,
  punctumSelectors,
} from '../../store/works/works.selectors';

import {
  StoreType,
  ContainerType
} from '../../store/types';

const SubNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType, props: NavBarProps) => ({
      className: '',
      buttonClassName: '',
      labels: selectSubNavLabels(state),
      title: 'portfolio',
    }),
    (dispatch: Function, props: NavBarProps) => ({
      
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
      hide: () => dispatch(
        modalActions.setModalHide(props.namespace)
      ),
      setLong: (data) => dispatch(
        postActions.setPostLong(props.namespace, data)
      ),
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
      setLong: (data) => dispatch(
        postActions.setPostLong(props.namespace, data)
      ),
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
      showModal: () => dispatch(
        modalActions.setModalShow(props.namespace)
      )
    })
  )(Punctum);

export {
  ModalContainer,
  PostContainer,
  PortalContainer,
  PunctumContainer,
  SubNavContainer,
}
