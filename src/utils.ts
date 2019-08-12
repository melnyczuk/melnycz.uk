import { MediaDBItemType, WorkType, ImageType } from './types';


const buildSrc =
  ({ type, baseUrl, namespace, index, ext }: ImageType) =>
    (size: number): string =>
      `${baseUrl}/${type}/${size}/${namespace}-${index}.${ext}`;

const filterMediaByNamespace =
  (namespace: string) =>
    (media: MediaDBItemType): boolean =>
      (media.namespace === namespace);

const filterWorks =
  (works: WorkType[]) =>
    (label: string): WorkType[] =>
      works.filter(({ area }) => area === label);

const addBaseUrlAndTypeToMediaItem =
  (baseUrl: string) =>
    (type: string) =>
      (mediaItem: MediaDBItemType): ImageType =>
        ({ ...mediaItem, baseUrl, type });


export {
  buildSrc,
  filterMediaByNamespace,
  filterWorks,
  addBaseUrlAndTypeToMediaItem,
};
