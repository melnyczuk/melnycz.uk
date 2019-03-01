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
} from '../../types';

const selectNamespace = (
  state: StoreType,
  props: ContainerType
): string => props.namespace;

const selectWorks = (
  state: StoreType
): WorksType => state.works;

const selectWork = createSelector(
  [selectWorks, selectNamespace],
  (works: WorksType, namespace: string): WorkType => works[namespace]
);

const selectWorkMediaIndex = createSelector(
  selectWork,
  (work: WorkType): MediaIndexType | null => (
    (work && work.media) ? work.media : null
  ),
);

const selectImageKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): string[] | null => (
    (mediaIndex && mediaIndex.imageKeys) ? mediaIndex.imageKeys : []
  ),
);

const selectVideoKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): string[] | null => (
    (mediaIndex && mediaIndex.videoKeys) ? mediaIndex.videoKeys : []
  ),
);

const selectAudioKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): string[] | null => (
    (mediaIndex && mediaIndex.audioKeys) ? mediaIndex.audioKeys : []
  ),
);

const selectWorkDescription = createSelector(
  [selectWork],
  (work: WorkType): DescriptionType | null => (
    (work && work.description) ? work.description : null
  ),
);


const mediaSelectors = {

  selectBinBaseUrl,

  selectImages: createSelector(
    [selectImageKeys, selectImages],
    (
      imageKeys: string[],
      images: ImageType[]
    ): ImageType[] | [] => (
        images.filter((image) => (imageKeys.includes(image.id)))
      ),
  ),

  selectVideos: createSelector(
    [selectVideoKeys, selectVideos],
    (
      videoKeys: string[],
      videos: VideoType[]
    ): VideoType[] | null => (
        videos.filter((video) => (videoKeys.includes(video.id)))
      ),
  ),

  selectAudios: createSelector(
    [selectAudioKeys, selectAudios],
    (
      audioKeys: string[],
      audio: AudioType[]
    ): AudioType[] | null => (
        audio.filter((audio) => (audioKeys.includes(audio.id)))
      ),
  ),

};

const postSelectors = {

  selectLongPath: createSelector(
    [selectNamespace, selectBinBaseUrl],
    (namespace: string, baseBinUrl: string): string | null => (
      (namespace && baseBinUrl)
        ? `${baseBinUrl}/works/${namespace}/${namespace}.txt`
        : null
    ),
  ),

  selectLong: createSelector(
    [selectWorkDescription],
    (desc: DescriptionType): string | null => (
      (desc && desc.long) ? desc.long : null
    ),
  ),

  selectShort: createSelector(
    [selectWorkDescription],
    (desc: DescriptionType): string | null => (
      (desc && desc.short) ? desc.short : null
    ),
  ),

  selectTitle: createSelector(
    [selectWork],
    (work: WorkType): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

};

const modalSelectors = {

  selectVisible: createSelector(
    [selectWork],
    (work: WorkType): boolean => (
      (work && work.visible) ? work.visible : false
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
    [selectWork, selectNamespace, selectBinBaseUrl],
    (work: WorkType, namespace: string, baseBinUrl: string): string | null => (
      (work && namespace && baseBinUrl && work.img)
        ? `${baseBinUrl}/works/${namespace}/${work.img}.jpg`
        : null
    ),
  ),

};

const worksSelectors = {
  
  selectWorks,

  selectWorksFilter: (state: StoreType) => state.filter,

}

export {
  modalSelectors,
  mediaSelectors,
  postSelectors,
  punctumSelectors,
  worksSelectors
};
