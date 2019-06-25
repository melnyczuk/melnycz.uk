export interface ActionType {
  type: string;
  id: string;
  data: string[];
}

export interface AreaType {
  nav: NavType;
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
  baseUrl: string;
  punctum?: ImageType;
  images?: ImageType[];
  videos?: AVType[];
  audios?: AVType[];
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
  path?: string;
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
  label: string;
  path: string;
  subnav: NavType[];
}

export interface StoreType {
  active: string;
  media: MediaStoreType;
  nav: NavType[];
  works: WorkType[];
}

export interface WorkType {
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

export interface DB {
  media: MediaStoreType;
  works: WorkType[];
}
