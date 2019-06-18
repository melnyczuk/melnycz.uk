import { connect } from 'react-redux';
import { StoreType, ActionType } from '../../types';
import { PostVals, PostFuncs, PostProps, Post } from '../../components/Post';
import { ModalVals, ModalFuncs, ModalProps, Modal } from '../../components/Modal';
import { PunctumVals, PunctumFuncs, PunctumProps, Punctum } from '../../components/Punctum';
import { selectDescription, selectMedia, selectVisible } from '../../store/about/selectors';
import { setDescription } from '../../store/portfolio/actions';
import { setHide, setShow } from '../../store/about/actions';
import { selectBaseUrl } from '../../store/media/selectors';

const placeholderAction: ActionType = {
  type: null,
  namespace: 'aboutbio',
}

const PostContainer = connect<PostVals, PostFuncs, {}>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      baseUrl: selectBaseUrl(state, props),
      description: selectDescription(state, props),
    }),
    (dispatch: Function, props: PostProps) => ({
      setDesc: (data: string[]) => dispatch(setDescription(props, data)),
    }),
  )(Post);

  const ModalContainer = connect<ModalVals, ModalFuncs, {}>
  (
    (state: StoreType, props: ModalProps) => ({
      className: '',
      visible: selectVisible(state, props),
      title: 'About Howard Melnyczuk',
    }),
    (dispatch: Function, props: ModalProps) => ({
      hide: () => dispatch(setHide(props)),
    }),
  )(Modal);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: '',
      baseUrl: selectBaseUrl(state, props),
      image: selectMedia.punctum(state, props),
      title: '',
    }),
    (dispatch: Function, props: PunctumProps) => ({
      show: () => dispatch(setShow(props)),
    })
  )(Punctum);

export {
  ModalContainer,
  PostContainer,
  PunctumContainer,
}
