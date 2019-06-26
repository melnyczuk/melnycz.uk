import { SiteTitle } from "./components/SiteTitle";
import { string } from "prop-types";

export interface ActionType {
  type: string;
  id: string;
  data: string[];
}

export interface AreaType {
  works: WorkType[];
}

export interface ContainerType {
  namespace: string;
  children?: ContainerType | JSX.Element | ContainerType[] | JSX.Element[];
}

export interface ExhibitionType {
  name: string;
  curator?: string[];
  place: string;
  city: string;
  country: string;
  geo: number[];
  date: number[];
  media: MediaIndexType;
  links?: string[];
}

export interface MediaStoreType {
  images: ImageType[];
  videos: AVType[];
  audios: AVType[];
}

export interface MediaIndexType {
  punctum: number;
  images: number[];
  videos: number[];
  audios: number[];
}

export interface MediaItemType {
  namespace: string;
  index: number;
  ext: string;
  alt: string;
  type: string;
  baseUrl: string;
  path?: string;
  url?: string;
}

export interface ImageType extends MediaItemType {
  sizes: number[];
  caption?: string;
}

export interface AVType extends MediaItemType {
  duration?: number;
  description?: string[];
}

export interface NavType {
  active: string;
  sitetitle: string;
  labels: string[];
}

export interface StoreType {
  media: MediaStoreType;
  nav: NavType;
  works: WorkType[];
}

export interface WorkType {
  area: string;
  namespace: string;
  title: string;
  year: number[];
  media: MediaIndexType;
  tags: string[];
  description?: string[];
  visible?: boolean;
}

export interface ExhibitionType {
  title: string;
  space: string;
  city: string;
  country: string;
  geo: number[];
  dates: number[];
  media: MediaIndexType;
  curator?: string[];
  links?: string[];
}
