import { createSelector, } from 'reselect';

import {
  StoreType,
  MediaStoreType,
  ImageType,
  AVType,
  MediaItemType,
} from '../../types';

const selectMedia = ({ media = null }: StoreType, props: any): MediaStoreType => media;

const selectBaseUrl = createSelector(
  [selectMedia],
  ({ baseUrl = '' }: MediaStoreType): string => baseUrl,
)

const filterMedia = (namespace: string, indices: number[]) => {
  return (media: MediaItemType): boolean =>
    ((media.namespace === namespace) && (indices.includes(media.index)))
}

const selectImageArray = createSelector(
  [selectMedia],
  ({ images = null }: MediaStoreType): ImageType[] => images
);

const selectVideoArray = createSelector(
  [selectMedia],
  ({ videos = null }: MediaStoreType): AVType[] => videos
);

const selectAudioArray = createSelector(
  [selectMedia],
  ({ audios }: MediaStoreType): AVType[] => audios
);

export {
  filterMedia,
  selectBaseUrl,
  selectAudioArray,
  selectVideoArray,
  selectImageArray,
}
