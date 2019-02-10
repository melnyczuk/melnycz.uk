import { createSelector } from 'reselect';

import {
  selectBinBaseUrl,
  selectImages,
  selectVideos,
  selectAudios,
} from '../media/media.selectors';

import {
  StoreType,
  WorkType,
  WorksType,
  ContainerType,
  DescriptionType,
  MediaIndexType,
  ImageType,
  VideoType,
  AudioType,
} from '../types';

const selectWorks = (state: StoreType): WorksType => state.works;

const selectWork = (
  state: StoreType,
  { namespace }: ContainerType
): WorkType => (
    selectWorks(state)[namespace]
  );

const selectWorkMediaIndex = createSelector(
  selectWork,
  (work: WorkType): MediaIndexType | null => (
    (work && work.media) ? work.media : null
  ),
);

const selectImageKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): Array<string> | null => (
    (mediaIndex && mediaIndex.imageKeys) ? mediaIndex.imageKeys : null
  ),
);

const selectVideoKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): Array<string> | null => (
    (mediaIndex && mediaIndex.videoKeys) ? mediaIndex.videoKeys : null
  ),
);

const selectAudioKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): Array<string> | null => (
    (mediaIndex && mediaIndex.audioKeys) ? mediaIndex.audioKeys : null
  ),
);

const selectWorkDescription = createSelector(
  [selectWork],
  (work: WorkType): DescriptionType | null => (
    (work && work.description) ? work.description : null
  ),
);

const modalSelectors = {
  selectVisible: createSelector(
    [selectWork],
    (work: WorkType): boolean => (
      (work && work.visible) ? work.visible : false),
  ),
};

const mediaSelectors = {

  selectBinBaseUrl,

  selectImages: createSelector(
    [selectImageKeys, selectImages],
    (imageKeys: Array<string>, images: Array<ImageType>): Array<ImageType> | null => (
      images.filter((image) => (imageKeys.includes(image.id)))
    ),
  ),

  selectVideos: createSelector(
    [selectVideoKeys, selectVideos],
    (videoKeys: Array<string>, videos: Array<VideoType>): Array<VideoType> | null => (
      videos.filter((video) => (videoKeys.includes(video.id)))
    ),
  ),

  selectAudios: createSelector(
    [selectAudioKeys, selectAudios],
    (audioKeys: Array<string>, audio: Array<AudioType>): Array<AudioType> | null => (
      audio.filter((audio) => (audioKeys.includes(audio.id)))
    ),
  ),

};

const postSelectors = {

  selectLong: createSelector(
    [selectWorkDescription],
    (desc: DescriptionType): string | null => (
      (desc && desc.long) ? desc.long : null
    ),
  ),

  selectShort: createSelector(
    selectWorkDescription,
    (desc: DescriptionType): string | null => (
      (desc && desc.short) ? desc.short : null
    ),
  ),

  selectExpanded: createSelector(
    [selectWorkDescription],
    (desc: DescriptionType): boolean => (
      (desc && desc.expanded) ? desc.expanded : false
    ),
  ),

  selectTitle: createSelector(
    [selectWork],
    (work: WorkType): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

};

const punctumSelectors = {

  selectAlt: createSelector(
    [selectWork],
    (work: WorkType): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

  selectSrc: createSelector(
    [selectWork, selectBinBaseUrl],
    (work: WorkType, baseBinUrl: string): string | null => (
      (work && baseBinUrl && work.img)
        ? `${baseBinUrl}/${work.img}`
        : null
    ),
  ),

};

export {
  selectWorks,
  modalSelectors,
  mediaSelectors,
  postSelectors,
  punctumSelectors,
};
