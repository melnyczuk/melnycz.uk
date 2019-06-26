import { createSelector, } from 'reselect';
import selectRoot from './root';
import { MediaStoreType, ImageType, AVType } from '../../types';


const selectBaseUrl = createSelector(
  [selectRoot.media],
  ({ baseUrl = '' }: MediaStoreType): string =>
    baseUrl,
)

const selectImages = createSelector(
  [selectRoot.media],
  ({ images = null }: MediaStoreType): ImageType[] =>
    images
);

const selectVideos = createSelector(
  [selectRoot.media],
  ({ videos = null }: MediaStoreType): AVType[] =>
    videos
);

const selectAudios = createSelector(
  [selectRoot.media],
  ({ audios }: MediaStoreType): AVType[] =>
    audios
);


export default {
  baseUrl: selectBaseUrl,
  audios: selectAudios,
  images: selectImages,
  videos: selectVideos,
}
