import { createSelector } from 'reselect';

import {
  StoreType,
  WorkType,
  MediaIndexType,
  ImageType,
  AVType,
} from '../../types';

import {
  filterMedia,
  selectImageArray,
  selectVideoArray,
  selectAudioArray,
} from '../media/selectors';

import {
  selectNamespace,
} from '../active/selectors';

const selectPortfolio = ({ works }: StoreType, props): WorkType[] => works;

const selectWork = createSelector(
  [selectPortfolio, selectNamespace],
  (works: WorkType[], name: string): WorkType => works.filter(
    ({ namespace }: WorkType): Boolean => namespace === name
  )
);

const selectDescription = createSelector(
  [selectWork],
  ({ description = null }: WorkType): string[] => description,
);

const selectVisible = createSelector(
  [selectWork],
  ({ visible = false }: WorkType): boolean => visible,
);

const selectAlt = createSelector(
  [selectWork],
  ({ title = null }: WorkType): string => title,
);

const selectTitle = createSelector(
  [selectWork],
  ({ title = null }: WorkType): string => title,
);

const selectMediaIndicies = createSelector(
  [selectWork],
  ({ media = null }: WorkType): MediaIndexType => media
);

const selectMedia = {
  index: createSelector(
    [selectWork],
    ({ media = null }: WorkType): MediaIndexType => media,
  ),

  punctum: createSelector(
    [selectImageArray, selectNamespace, selectMediaIndicies],
    (images: ImageType[], namespace: string, { punctum }): ImageType =>
      images.filter(filterMedia(namespace, [punctum]))[0]
  ),

  images: createSelector(
    [selectImageArray, selectNamespace, selectMediaIndicies],
    (imgs: ImageType[], namespace: string, { images }): ImageType[] =>
      imgs.filter(filterMedia(namespace, images))
  ),

  videos: createSelector(
    [selectVideoArray, selectNamespace, selectMediaIndicies],
    (vids: VideoType[], namespace: string, { videos }): VideoType[] =>
      vids.filter(filterMedia(namespace, videos))
  ),

  audios: createSelector(
    [selectAudioArray, selectNamespace, selectMediaIndicies],
    (auds: AudioType[], namespace: string, { audios }): AudioType[] =>
      auds.filter(filterMedia(namespace, audios))
  ),
};

export {
  selectAlt,
  selectDescription,
  selectNamespace,
  selectPortfolio,
  selectTitle,
  selectVisible,
  selectMedia,
};
