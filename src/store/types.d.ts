import { DB, Work as DBWork } from '../../db/types';
import { type } from 'os';

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

export interface ImageType {
  id: string;
  path: string;
  ext: string;
  title?: string;
  rank?: number;
  description?: DescriptionType;
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

export interface MediaIndexType {
  imageKeys: string[];
  videoKeys: string[];
  audioKeys: string[];
}

export interface ModalDescriptionType extends DescriptionType {

}

export interface NavType {
  title: string;
  labels: string[];
}

export interface PortfolioType extends AreaType {

}

export interface ResearchType extends AreaType {

}

export interface StoreType {
  about: AboutType;
  nav: NavType[];
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
