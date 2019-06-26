import { createSelector } from 'reselect';
import selectRoot from './root';
import { MediaStoreType, ImageType, AVType } from '../../types';


const selectImages = createSelector(
  [selectRoot.media],
  ({ images = null }: MediaStoreType): ImageType[] =>
    images,
);

const selectVideos = createSelector(
  [selectRoot.media],
  ({ videos = null }: MediaStoreType): AVType[] =>
    videos,
);

const selectAudios = createSelector(
  [selectRoot.media],
  ({ audios }: MediaStoreType): AVType[] =>
    audios,
);


export default {
  audios: selectAudios,
  images: selectImages,
  videos: selectVideos,
};
