export interface AboutType {
  title: string;
  info: InfoType;
  media: MediaIndexType;
  visible?: boolean;
  description?: string[];
}

export interface ActionType {
  type: string;
  namespace: string;
  data?: string[];
}

export interface AreaType {
  nav: NavType;
}

export interface AreasType {
  active: string;
  portfolio: PortfolioType;
  research: ResearchType;
}

export interface InfoType {
  name: string;
  email: string;
  handle: string;
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

export interface MediaType {
  baseUrl: string;
  punctum?: ImageType;
  images?: ImageType[];
  videos?: VideoType[];
  audios?: AudioType[];
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

export interface VideoType extends MediaItemType {
  duration?: number;
  description?: string[];
}

export interface AudioType extends MediaItemType {
  duration?: number;
  description?: string[];
}

export interface NavType {
  label: string;
  path: string;
  subnav: NavType[];
}

export interface ResearchType extends AreaType {}

export interface StoreType {
  active: string;
  about: AboutType;
  media: MediaType;
  nav: NavType[];
  portfolio: PortfolioType;
}

export interface PortfolioType {
  [key: string]: WorkType;
}

export interface WritingType {}

export interface WorkType {
  namespace: string;
  title: string;
  repo: string;
  year: number[];
  media: MediaIndexType;
  materials: string[];
  type: string[];
  description?: string[];
  visible?: boolean;
  links?: string[];
  exhibitions?: ExhibitionType[];
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
  bio: string[];
  info: InfoType;
  media: MediaType;
  works: WorkType[];
  writing: WritingType[];
}
