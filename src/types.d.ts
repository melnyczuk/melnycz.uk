export interface AboutType {
  title: string;
  bio: BioType;
  info: InfoType;
  statement?: string[];
}

export interface ActionType {
  type: string;
  namespace: string;
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
  baseURL: string;
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
  id: string;
  index: number;
  path: string;
  ext: string;
}

export interface ImageType extends MediaItemType {
  alt: string;
  caption?: string;
}

export interface VideoType extends MediaItemType {
  title: string;
  duration?: number;
  description?: string[];
}

export interface AudioType extends MediaItemType {
  title?: string;
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
  exhibitions: number[];
  description?: string[];
  visible?: boolean;
}

export interface Exhibition {
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

export interface BioType {
  short?: string;
  long?: string;
}

export interface DB {
  bio: string[];
  info: InfoType;
  media: MediaType;
  works: WorkType[];
  writing: WritingType;
}
