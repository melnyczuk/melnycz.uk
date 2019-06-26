import { MediaItemType, WorkType } from "./types";

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
        ((media.namespace === namespace) && (indices.includes(media.index)))

const filterWorks =
  (works: WorkType[]) =>
    (label: string) =>
      works.filter(({ area }) => area === label)


export { buildSrcWithBaseUrl, filterMedia, filterWorks }
