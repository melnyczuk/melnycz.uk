import { createSelector, } from 'reselect';

import { 
  StoreType, 
  MediaType, 
  ImageType, 
  VideoType, 
  AudioType, 
} from '../../types';

function selectMedia({ media = null }: StoreType): MediaType {
  return media;
}

const selectBinBaseUrl = createSelector(
  selectMedia,
  ({ baseURL = null}: MediaType): string => baseURL
);

const selectImages = createSelector(
  selectMedia,
  ({ images = null }: MediaType): ImageType[] => images
);

const selectVideos = createSelector(
  selectMedia,
  ({ videos = null }: MediaType): VideoType[] => videos
);

const selectAudios = createSelector(
  selectMedia,
  ({ audios }: MediaType): AudioType[] => audios
);

export {
  selectBinBaseUrl,
  selectAudios,
  selectVideos,
  selectImages,
}
