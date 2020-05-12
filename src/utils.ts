import { MediaDBItemType, WorkType, ImageType } from './types';

import { media as mediaDb } from '../static/db/media.json';

const { baseUrl } = mediaDb;

const buildSrc: (i: ImageType) => (s: number) => string = ({
  type,
  baseUrl,
  namespace,
  index,
  ext,
}) => (size) => `${baseUrl}/${type}/${size}/${namespace}-${index}.${ext}`;

const filterMediaByNamespace: (n: string) => (m: MediaDBItemType) => boolean = (
  namespace
) => (media) => media.namespace === namespace;

const filterWorks: (w: WorkType[]) => (l: string) => WorkType[] = (works) => (
  label
) => works.filter(({ area }) => area === label);

const addBaseUrlAndTypeToMediaItem: (
  b: string
) => (t: string) => (m: MediaDBItemType) => ImageType = (baseUrl) => (type) => (
  mediaItem
) => ({ ...mediaItem, baseUrl, type });

const imageTypeCompletionFunc = addBaseUrlAndTypeToMediaItem(baseUrl)('images');

export {
  addBaseUrlAndTypeToMediaItem,
  buildSrc,
  filterMediaByNamespace,
  filterWorks,
  imageTypeCompletionFunc,
};
