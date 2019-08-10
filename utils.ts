import { MediaItemType, WorkType, AVType, ImageType } from './types';


const buildSrc =
  ({ type, baseUrl, namespace, index, ext }: MediaItemType) =>
    (size: number): string =>
      `${baseUrl}/${type}/${size}/${namespace}-${index}.${ext}`;

const filterMediaByNamespace =
  (namespace: string) =>
    (media: MediaItemType): boolean =>
      (media.namespace === namespace);

const filterMediaByIndices =
  (indices: number[]) =>
    (media: MediaItemType): boolean =>
      (indices.includes(media.index));

const filterWorks =
  (works: WorkType[]) =>
    (label: string): WorkType[] =>
      works.filter(({ area }) => area === label);

const addBaseUrlAndTypeToPartialMediaItem =
  (baseUrl: string) =>
    (type: string) =>
      (mediaItem: Partial<MediaItemType>): ImageType | AVType =>
        ({ ...mediaItem, baseUrl, type } as ImageType | AVType);


export {
  buildSrc,
  filterMediaByNamespace,
  filterMediaByIndices,
  filterWorks,
  addBaseUrlAndTypeToPartialMediaItem
};
