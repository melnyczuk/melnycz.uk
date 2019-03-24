export interface AboutType {
  title: string;
  bio: BioType;
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

export interface AudioType {
  id: string;
  index: number;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: DescriptionType;
}

export interface BioType {
  short?: string;
  long?: string;
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

export interface MediaIndexType {
  images: number[];
  videos: number[];
  audios: number[];
}

export interface ImageType {
  id: string;
  index: number;
  path: string;
  ext: string;
  alt: string;
  caption?: DescriptionType;
}

export interface InfoType {
  name: string;
  email: string;
  handle: string;
}

export interface MediaType {
  baseURL: string;
  images?: ImageType[];
  videos?: VideoType[];
  audios?: AudioType[];
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

export interface VideoType {
  id: string;
  index: number;
  path: string;
  ext: string;
  title: string;
  duration?: number;
  description?: DescriptionType;
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
  img: string;
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

export interface Media {
  baseURL: string;
  images?: Image[];
  videos?: Video[];
  audios?: Audio[];
}

export interface Image {
  id: string;
  path: string;
  ext: string;
  alt: string;
  caption?: DescriptionType;
}

export interface Video {
  id: string;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: DescriptionType;
}

export interface Audio {
  id: string;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: DescriptionType;
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
  bio: Bio;
  info: Information;
  media: Media;
  works: Work[];
  writing: Writing[];
}
