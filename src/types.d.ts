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

export interface MediaStoreType {
  images: ImageType[];
  videos: AVType[];
  audios: AVType[];
}

export interface MediaIndexType {
  punctum: number[];
  images: number[];
  videos: number[];
  audios: number[];
}

export interface MediaDBItemType {
  namespace: string;
  index: number;
  ext: string;
  alt: string;
  path?: string;
  url?: string;
  sizes?: number[];
}

export interface ImageType extends MediaDBItemType {
  type: string;
  baseUrl: string;
}

export interface AVType extends ImageType {
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
  live: boolean;
}
