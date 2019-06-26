import { MediaItemType, WorkType, AVType, ImageType } from './types';


const buildSrc =
  ({ type, baseUrl, namespace, index, ext }: MediaItemType) =>
    (size: number = null) =>
      `${baseUrl}/${type}${size && `/${size}`}/${namespace}-${index}.${ext}`;

const filterMedia =
  (indices: number[]) =>
    (namespace: string) =>
      (media: MediaItemType): boolean =>
        ((media.namespace === namespace) && (indices.includes(media.index)));

const filterWorks =
  (works: WorkType[]) =>
    (label: string) =>
      works.filter(({ area }) => area === label);

const getBaseUrlAppender =
  (baseUrl: string) =>
    (type: string) =>
      (mediaItem): ImageType | AVType =>
        ({ ...mediaItem, baseUrl, type });


export { buildSrc, filterMedia, filterWorks, getBaseUrlAppender }
