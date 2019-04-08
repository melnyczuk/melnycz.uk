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

function selectNamespace(state: StoreType, { namespace }: ContainerType): string {
  return namespace;
}

function selectPortfolio({ portfolio }: StoreType): PortfolioType {
  return portfolio;
}

const selectWork = createSelector(
  [selectPortfolio, selectNamespace],
  (portfolio: PortfolioType, namespace: string): WorkType => {
    return portfolio[namespace]
  }
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

const selectWorkMedia = {
  index: createSelector(
    selectWork,
    ({ media = null }: WorkType): MediaIndexType => media,
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
    return punctum ? buildSrc(punctum) : null;
  }
);

const selectTitle = createSelector(
  [selectWork],
  ({ title = null }: WorkType): string => title,
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
