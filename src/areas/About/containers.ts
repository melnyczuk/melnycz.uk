import { connect } from 'react-redux';
import { StoreType, ImageType } from '../../types';
import { PostVals, PostFuncs, PostProps, Post } from '../../components/Post';
import { ModalVals, ModalFuncs, ModalProps, Modal } from '../../components/Modal';
import { PunctumVals, PunctumFuncs, PunctumProps, Punctum } from '../../components/Punctum';
import { selectBinBaseUrl } from '../../store/media/selectors';
import { selectBio } from '../../store/about/selectors';
import { selectWorkMedia } from '../../store/portfolio/selectors';

const PostContainer = connect<PostVals, PostFuncs, {}>
  (
    (state: StoreType, props: PostProps) => ({
      className: '',
      baseURL: selectBinBaseUrl(state),
      desc: selectBio(state),
    }),
    (dispatch: Function, props: PostProps) => ({
      setDesc: (data: string[]) => dispatch(),
    })
  )(Post);

  const ModalContainer = connect<ModalVals, ModalFuncs, {}>
  (
    (state: StoreType, props: ModalProps) => ({
      className: '',
      visible: true,
      title: 'About Howard Melnyczuk',
    }),
    (dispatch: Function, props: ModalProps) => ({
      hide: () => {},
    })
  )(Modal);

const PunctumContainer = connect<PunctumVals, PunctumFuncs, {}>
  (
    (state: StoreType, props: PunctumProps) => ({
      className: '',
      baseURL: selectBinBaseUrl(state),
      img: selectWorkMedia.punctum(state, props),
      alt: '',
      title: '',
    }),
    (dispatch: Function, props: PunctumProps) => ({
      showModal: () => dispatch(),
    })
  )(Punctum);

export {
  ModalContainer,
  PostContainer,
  PunctumContainer,
}
