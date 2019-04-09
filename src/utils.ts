import Axios from "axios";
import { MediaItemType } from "./types";

const fetchLongDescriptions = (path: string) => Axios.get(path).then(
  ({ data }) => data
);

const buildSrc = ({ path = '', id = '', index = 0, ext = '' }: MediaItemType): string => {
  return `${path}/${id}-${index}.${ext}`
}

export {
  buildSrc,
  fetchLongDescriptions,
}