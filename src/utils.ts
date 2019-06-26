import { MediaItemType, WorkType, ImageType, AVType } from "./types";

const buildSrcWithBaseUrl =
  (baseUrl: string) =>
    (type: string) =>
      (size: number) =>
        ({ namespace, index, ext }: MediaItemType): string =>
          `${baseUrl}/${type}/${size}/${namespace}-${index}.${ext}`;

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
    (mediaItem: ImageType | AVType, index: number): ImageType | AVType =>
      ({ ...mediaItem, baseUrl });


export { buildSrcWithBaseUrl, filterMedia, filterWorks, getBaseUrlAppender }
