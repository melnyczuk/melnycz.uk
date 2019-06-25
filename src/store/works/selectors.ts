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
import { AreaProps } from '../../areas/Area';

const selectWorks= ({ works }: StoreType, props): WorkType[] => works;

const selectWork = createSelector(
  [selectWorks, selectNamespace],
  (works: WorkType[], name: string): WorkType => works.filter(
    ({ namespace }: WorkType): Boolean => namespace === name
  )[0]
);

const selectAreaLabel = (state: StoreType, { label }: AreaProps) => label;

const selectAreaWorks = createSelector(
  [selectWorks, selectAreaLabel],
  (works, label) => works.filter(({ area }) => area === label)
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

const selectSiteTitle = createSelector([], (): string => 'Howard Melnyczuk');

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
    (vids: AVType[], namespace: string, { videos }): AVType[] =>
      vids.filter(filterMedia(namespace, videos))
  ),

  audios: createSelector(
    [selectAudioArray, selectNamespace, selectMediaIndicies],
    (auds: AVType[], namespace: string, { audios }): AVType[] =>
      auds.filter(filterMedia(namespace, audios))
  ),
};

export {
  selectAlt,
  selectAreaWorks,
  selectDescription,
  selectNamespace,
  selectWorks,
  selectSiteTitle,
  selectTitle,
  selectVisible,
  selectMedia,
};
