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
  MediaIndexType,
  ImageType,
  VideoType,
  AudioType,
  MediaItemType,
} from '../../types';

import { buildSrc } from '../../utils';

function concatBaseBinUrlToPath(baseBinUrl: string) {
  return ({ path }: MediaItemType): string => `${baseBinUrl}/${path}`;
}

function filterMediaByNamespace(namespace: string) {
  return ({ id }: MediaItemType): boolean => (id === namespace);
}

function selectNamespace(state: StoreType, props: ContainerType): string {
  return props.namespace;
}

function selectPortfolio(state: StoreType): PortfolioType {
  return state.portfolio;
}

const selectWork = createSelector(
  [selectPortfolio, selectNamespace],
  (portfolio: PortfolioType, namespace: string): WorkType =>
    portfolio[namespace]
);

const selectDescription = createSelector(
  [selectWork],
  (work: WorkType): string[] => (
    (work && work.description) ? work.description : null
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
  (work: WorkType): string => (
    (work && work.title) ? work.title : null
  ),
);

const selectWorkMedia = {
  index: createSelector(
    selectWork,
    (work: WorkType): MediaIndexType => (
      (work && work.media) ? work.media : null
    ),
  ),

  images: createSelector(
    [selectImages, selectNamespace, selectBinBaseUrl],
    (images: ImageType[], namespace: string, baseBinUrl: string): ImageType[] =>
      images.filter(filterMediaByNamespace(namespace))
        .map(img => ({ ...img, path: concatBaseBinUrlToPath(baseBinUrl)(img) }))
  ),

  videos: createSelector(
    [selectVideos, selectNamespace, selectBinBaseUrl],
    (videos: VideoType[], namespace: string, baseBinUrl: string): VideoType[] =>
      videos.filter(filterMediaByNamespace(namespace))
        .map(vid => ({ ...vid, path: concatBaseBinUrlToPath(baseBinUrl)(vid) }))
  ),

  audios: createSelector(
    [selectAudios, selectNamespace, selectBinBaseUrl],
    (audio: AudioType[], namespace: string, baseBinUrl: string): AudioType[] =>
      audio.filter(filterMediaByNamespace(namespace))
        .map(aud => ({ ...aud, path: concatBaseBinUrlToPath(baseBinUrl)(aud) }))
  ),
};

const selectPunctumSrc = createSelector(
  [selectWorkMedia.images, selectWorkMedia.index],
  (images: ImageType[], media: MediaIndexType): string | null => {
    const punctum = images.filter(img => img.index === media.punctum)[0];
    console.log('punc', punctum);
    return punctum ? buildSrc(punctum) : null;
  }
);

const selectTitle = createSelector(
  [selectWork],
  (work: WorkType): string => (
    (work && work.title) ? work.title : null
  )
);

export {
  selectAlt,
  selectDescription,
  selectPortfolio,
  selectPunctumSrc,
  selectTitle,
  selectWorkMedia,
  selectVisible,
};
