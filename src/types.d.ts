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
