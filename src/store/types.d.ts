import DB from '../../db/types';
import { type } from 'os';

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

export interface AudioType {
  id: string;
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
  children?: ContainerType | JSX.Element | Array<ContainerType | JSX.Element>;
}

export interface DBWork {
  namespace: string;
  live: boolean;
  title: string;
  img: string;
  year: Array<number>;
  description: DescriptionType;
  media: MediaIndexType;
  materials: Array<string>;
  type: Array<string>;
  links?: Array<string>;
  exhibitions?: Array<ExhibitionType>;
}

export interface DescriptionType {
  expanded: boolean | false;
  short: string;
  long?: string;
  mid?: string;
}

export interface ExhibitionType {
  name: string;
  curator?: Array<string>;
  place: string;
  city: string;
  country: string;
  geo: Array<number>;
  date: Array<number>;
  media: MediaIndexType;
  links?: Array<string>;
}

export interface ImageType {
  id: string;
  path: string;
  ext: string;
  title?: string;
  rank?: number;
  description?: DescriptionType;
}

export interface InformationType {
  name: string;
  email: string;
  handle: string;
}

export interface MediaType {
  baseURL: string;
  images?: Array<ImageType>;
  videos?: Array<VideoType>;
  audios?: Array<AudioType>;
}

export interface MediaIndexType {
  imageKeys: Array<string>;
  videoKeys: Array<string>;
  audioKeys: Array<string>;
}

export interface ModalDescriptionType extends DescriptionType {

}

export interface NavType {
  title: string;
  links: NavLinksType;
  default?: string;
}

export type NavLinksType = Array<NavType|string>;

export interface PortfolioType extends AreaType {

}

export interface ResearchType extends AreaType {

}

export interface StoreType {
  areas: AreasType;
  navs: NavType;
  works: WorksType;
  media: MediaType;
}

export interface VideoType {
  id: string;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: DescriptionType;
}

export interface WorkType extends DBWork {
  description: DescriptionType;
  visible: boolean;
}

export interface WorksType {
  [key: string]: WorkType;
}

export interface WritingType {

}
