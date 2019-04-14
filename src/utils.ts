import { MediaItemType } from "./types";

const buildSrc = (media: MediaItemType): string => {
  const { path, id, index, ext } = media;
  return `${path}/${id}-${index}.${ext}`
}

export {
  buildSrc,
}
