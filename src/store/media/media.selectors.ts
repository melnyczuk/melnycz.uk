import { createSelector, } from 'reselect';
import { StoreType, MediaType, ImageType, VideoType, AudioType, } from '../types';

function selectMedia(state: StoreType): MediaType {
  return state.media;
}

const selectBinBaseUrl = createSelector(
  selectMedia,
  (media: MediaType): string => (
    media.baseURL ? media.baseURL : null
  ),
);

const selectImages = createSelector(
  selectMedia,
  (media: MediaType): Array<ImageType> => (
    media.images ? media.images : null
  ),
);

const selectVideos = createSelector(
  selectMedia,
  (media: MediaType): Array<VideoType> => (
    media.videos ? media.videos : null
  ),
);

const selectAudios = createSelector(
  selectMedia,
  (media: MediaType): Array<AudioType> => (
    media.audios ? media.audios : null
  ),
);

export {
  selectBinBaseUrl,
  selectAudios,
  selectVideos,
  selectImages,
}
