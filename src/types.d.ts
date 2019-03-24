export interface AboutType {
  title: string;
  bio: DescriptionType;
  info: InfoType;
  statement?: DescriptionType;
}

export interface ActionType {
  type: string;
  namespace: string;
  data?: any;
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

export interface DescriptionType {
  short: string;
  long?: string;
  mid?: string;
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
  images?: ImageType[];
  videos?: VideoType[];
  audios?: AudioType[];
}

export interface MediaIndexType {
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
  description?: DescriptionType;
}

export interface AudioType extends MediaItemType {
  title?: string;
  duration?: number;
  description?: DescriptionType;
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

export interface WritingType {

}

export interface WorkType {
  namespace: string;
  live: boolean;
  title: string;
  img: number;
  year: number[];
  description: DescriptionType;
  media: MediaIndexType;
  materials: string[];
  type: string[];
  visible?: boolean;
  links?: string[];
  exhibitions?: Exhibition[];
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


export interface Bio {
  short?: string;
  long?: string;
}

export interface Information {
  name: string;
  email: string;
  handle: string;
}

export interface Writing {

}

export interface DB {
  bio: DescriptionType;
  info: Information;
  media: MediaType;
  works: WorkType[];
  writing: Writing[];
}
