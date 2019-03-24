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
  PortfolioType,
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

const selectPortfolio = (
  state: StoreType
): PortfolioType => state.portfolio;

const selectWork = createSelector(
  [selectPortfolio, selectNamespace],
  (portfolio: PortfolioType, namespace: string): WorkType => portfolio[namespace]
);

const selectWorkMediaIndex = createSelector(
  selectWork,
  (work: WorkType): MediaIndexType | null => (
    (work && work.media) ? work.media : null
  ),
);

const selectImageKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): number[] | null[] => (
    (mediaIndex && mediaIndex.images) ? mediaIndex.images : []
  ),
);

const selectVideoKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): number[] | null[] => (
    (mediaIndex && mediaIndex.videos) ? mediaIndex.videos : []
  ),
);

const selectAudioKeys = createSelector(
  [selectWorkMediaIndex],
  (mediaIndex: MediaIndexType): number[] | null[] => (
    (mediaIndex && mediaIndex.audios) ? mediaIndex.audios : []
  ),
);

const selectWorkDescription = createSelector(
  [selectWork],
  (work: WorkType): DescriptionType | null => (
    (work && work.description) ? work.description : null
  ),
);

const selectWorkImages = createSelector(
  [selectImageKeys, selectImages, selectNamespace],
  (imageKeys: number[],
    images: ImageType[]
  ): ImageType[] | [] => (
      images.filter((image) => (imageKeys.includes(image.index)))
    ),
);

const selectWorkVideos = createSelector(
  [selectVideoKeys, selectVideos],
  (videoKeys: number[], videos: VideoType[]): VideoType[] | null => (
    videos.filter((video) => (videoKeys.includes(video.index)))
  ),
);

const selectWorkAudios = createSelector(
  [selectAudioKeys, selectAudios, selectNamespace],
  (audioKeys: number[], audio: AudioType[]): AudioType[] | null => (
      audio.filter((audio) => (audioKeys.includes(audio.index)))
    ),
);

const selectLongPath = createSelector(
  [selectNamespace, selectBinBaseUrl],
  (namespace: string, baseBinUrl: string): string | null => (
    (namespace && baseBinUrl)
      ? `${baseBinUrl}/portfolio/${namespace}/${namespace}.txt`
      : null
  ),
);

const selectLong = createSelector(
  [selectWorkDescription],
  (desc: DescriptionType): string | null => (
    (desc && desc.long) ? desc.long : null
  ),
);

const selectShort = createSelector(
  [selectWorkDescription],
  (desc: DescriptionType): string | null => (
    (desc && desc.short) ? desc.short : null
  ),
);

const selectVisible = createSelector(
  [selectWork],
  (work: WorkType): boolean => (
    (work && work.visible) ? work.visible : false
  ),
);

const selectAlt = createSelector(
  [selectWork],
  (work: WorkType): string | null => (
    (work && work.title) ? work.title : null
  ),
);

const selectSrc = createSelector(
  [selectWork, selectNamespace, selectBinBaseUrl],
  (work: WorkType, namespace: string, baseBinUrl: string): string | null => (
    (work && namespace && baseBinUrl && work.img)
      ? `${baseBinUrl}/portfolio/${namespace}/${work.img}.jpg`
      : null
  ),
);

const selectTitle = createSelector(
  [selectWork],
  (work: WorkType) => (
    (work && work.title) ? work.title : null
  )
);

export {
  selectAlt,
  selectLong,
  selectLongPath,
  selectPortfolio,
  selectShort,
  selectSrc,
  selectTitle,
  selectWorkVideos,
  selectWorkImages,
  selectWorkAudios,
  selectVisible,
};
