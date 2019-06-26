import { connect } from 'react-redux';
import { Modal, ModalProps, ModalVals, ModalFuncs } from '../components/Modal';
import { Portal, PortalProps, PortalVals, PortalFuncs } from '../components/Portal';
import { Post, PostProps, PostVals, PostFuncs } from '../components/Post';
import { Punctum, PunctumProps, PunctumVals, PunctumFuncs } from '../components/Punctum';
import { StoreType } from '../types';
import { setHide, setDescription, setShow } from '../store/actions';
import selectWork from '../store/selectors/work';
import selectMedia from '../store/selectors/media';


const ModalContainer = connect<ModalVals, ModalFuncs, {}>(
  (state: StoreType, props: ModalProps) => ({
    visible: selectWork.visible(state, props),
  }),
  (dispatch: Function, props: ModalProps) => ({
    hide: () => dispatch(setHide(props)),
  }),
)(Modal);

const PortalContainer = connect<PortalVals, PortalFuncs, {}>(
  (state: StoreType, props: PortalProps) => ({
    images: selectMedia.images(state, props),
  }),
  (dispatch: Function, props: PortalProps) => ({
    scroll: null,
  }),
)(Portal);

const PostContainer = connect<PostVals, PostFuncs, {}>(
  (state: StoreType, props: PostProps) => ({
    description: selectWork.description(state, props),
    images: selectWork.media.images(state, props),
    title: selectWork.title(state, props),
  }),
  (dispatch: Function, props: PostProps) => ({
    setDesc: (data: string[]) => dispatch(setDescription(props, data)),
  }),
)(Post);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>(
  (state: StoreType, props: PunctumProps) => ({
    image: selectWork.media.punctum(state, props),
    title: selectWork.title(state, props),
  }),
  (dispatch: Function, props: PunctumProps) => ({
    show: () => dispatch(setShow(props)),
  }),
)(Punctum);


export { ModalContainer, PortalContainer, PostContainer, PunctumContainer };
