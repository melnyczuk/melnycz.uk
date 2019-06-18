import { MediaItemType } from "./types";

const buildSrcWithBaseUrl =
  (baseUrl: string) =>
    (type: string) =>
      (size: number) =>
        ({ namespace, index, ext }: MediaItemType): string =>
          `${baseUrl}/${type}/${size}/${namespace}-${index}.${ext}`;

export { buildSrcWithBaseUrl }
