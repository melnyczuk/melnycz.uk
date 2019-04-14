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

function concatBaseBinUrlToPath(baseBinUrl: string) {
  return ({ path }: MediaItemType): string => `${baseBinUrl}/${path}`
}

function filterMedia(namespace: string, indices: number[]) {
  return (media: MediaItemType): boolean =>
    ((media.namespace === namespace) && (indices.includes(media.index)))
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
    [selectImages, selectNamespace, selectMediaIndicies, selectBinBaseUrl],
    (imgs: ImageType[], namespace: string, { images }, baseBinUrl: string): ImageType[] =>
      imgs.filter(filterMedia(namespace, images))
        .map(img => ({ ...img, path: concatBaseBinUrlToPath(baseBinUrl)(img) }))
  ),

  videos: createSelector(
    [selectVideos, selectNamespace, selectMediaIndicies, selectBinBaseUrl],
    (vids: VideoType[], namespace: string, { videos }, baseBinUrl: string): VideoType[] =>
      vids.filter(filterMedia(namespace, videos))
        .map(vid => ({ ...vid, path: concatBaseBinUrlToPath(baseBinUrl)(vid) }))
  ),

  audios: createSelector(
    [selectAudios, selectNamespace, selectMediaIndicies, selectBinBaseUrl],
    (auds: AudioType[], namespace: string, { audios }, baseBinUrl: string): AudioType[] =>
      auds.filter(filterMedia(namespace, audios))
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
  selectTitle,
  selectWorkMedia,
  selectVisible,
};
