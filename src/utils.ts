import { MediaItemType } from "./types";

const buildSrc = (baseUrl: string, type: string) =>
  (media: MediaItemType): string => {
    const { namespace, index, ext } = media;
    return `${baseUrl}/${type}/${namespace}-${index}.${ext}`
  }

export { buildSrc }
