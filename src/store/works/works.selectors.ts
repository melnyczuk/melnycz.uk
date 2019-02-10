import { createSelector } from 'reselect';

import {
  selectBinBaseUrl,
  selectImages,
  selectVideos,
  selectAudios,
} from '../media.selectors';

import {
  StoreState,
  Work,
  Works,
  Container,
  Description,
  MediaIndex,
  Image,
  Video,
  Audio,
} from '../store.d';

function selectWorks(state: StoreState): Works {
  return state.works;
}

const selectWork = (
  state: StoreState,
  { namespace }: Container): Work => (
    selectWorks(state)[namespace]
  );

const selectWorkMediaIndex = createSelector(
  selectWork,
  (work: Work): MediaIndex | null => (
    (work && work.media) ? work.media : null
  ),
);

const selectImageKeys = createSelector(
  selectWorkMediaIndex,
  (mediaIndex: MediaIndex): Array<string> | null => (
    (mediaIndex && mediaIndex.imageKeys) ? mediaIndex.imageKeys : null
  ),
);

const selectVideoKeys = createSelector(
  selectWorkMediaIndex,
  (mediaIndex: MediaIndex): Array<string> | null => (
    (mediaIndex && mediaIndex.videoKeys) ? mediaIndex.videoKeys : null
  ),
);

const selectAudioKeys = createSelector(
  selectWorkMediaIndex,
  (mediaIndex: MediaIndex): Array<string> | null => (
    (mediaIndex && mediaIndex.audioKeys) ? mediaIndex.audioKeys : null
  ),
);

const selectWorkDescription = createSelector(
  selectWork,
  (work: Work): Description | null => (
    (work && work.description) ? work.description : null
  ),
);

const modalSelectors = {
  selectVisible: createSelector(
    selectWork,
    (work: Work): boolean => (
      (work && work.visible) ? work.visible : false),
  ),
};

const mediaSelectors = {

  selectBinBaseUrl,

  selectImages: createSelector(
    [
      selectImageKeys,
      selectImages,
    ],
    (imageKeys: Array<string>, images: Array<Image>): Array<Image> | null => (
      images.filter((image) => (imageKeys.includes(image.id)))
    ),
  ),

  selectVideos: createSelector(
    [
      selectVideoKeys,
      selectVideos,
    ],
    (videoKeys: Array<string>, videos: Array<Video>): Array<Video> | null => (
      videos.filter((video) => (videoKeys.includes(video.id)))
    ),
  ),

  selectAudios: createSelector(
    [
      selectAudioKeys,
      selectAudios,
    ],
    (audioKeys: Array<string>, audio: Array<Audio>): Array<Audio> | null => (
      audio.filter((audio) => (audioKeys.includes(audio.id)))
    ),
  ),

};

const postSelectors = {

  selectLong: createSelector(
    selectWorkDescription,
    (desc: Description): string | null => (
      (desc && desc.long) ? desc.long : null
    ),
  ),

  selectShort: createSelector(
    selectWorkDescription,
    (desc: Description): string | null => (
      (desc && desc.short) ? desc.short : null
    ),
  ),

  selectExpanded: createSelector(
    selectWorkDescription,
    (desc: Description): boolean => (
      (desc && desc.expanded) ? desc.expanded : false
    ),
  ),

  selectTitle: createSelector(
    selectWork,
    (work: Work): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

};

const punctumSelectors = {

  selectAlt: createSelector(
    selectWork,
    (work: Work): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

  selectSrc: createSelector(
    [selectWork, selectBinBaseUrl],
    (work: Work, baseBinUrl: string): string | null => (
      (work && baseBinUrl && work.img)
        ? `${baseBinUrl}/${work.img}`
        : null
    ),
  ),

};

export {
  modalSelectors,
  mediaSelectors,
  postSelectors,
  punctumSelectors,
};
