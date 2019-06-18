import { createSelector, } from 'reselect';

import {
  StoreType,
  MediaType,
  ImageType,
  VideoType,
  AudioType,
  MediaItemType,
} from '../../types';

const selectMedia = ({ media = null }: StoreType, props: any): MediaType => media;

const selectBaseUrl = createSelector(
  [selectMedia],
  ({ baseUrl = '' }: MediaType): string => baseUrl,
)

const filterMedia = (namespace: string, indices: number[]) => {
  return (media: MediaItemType): boolean =>
    ((media.namespace === namespace) && (indices.includes(media.index)))
}

const selectImageArray = createSelector(
  [selectMedia],
  ({ images = null }: MediaType): ImageType[] => images
);

const selectVideoArray = createSelector(
  [selectMedia],
  ({ videos = null }: MediaType): VideoType[] => videos
);

const selectAudioArray = createSelector(
  [selectMedia],
  ({ audios }: MediaType): AudioType[] => audios
);

export {
  filterMedia,
  selectBaseUrl,
  selectAudioArray,
  selectVideoArray,
  selectImageArray,
}
