import DB from '../../db/types';
import { type } from 'os';

export interface ActionType {
  type: string;
  namespace: string;
}

export interface StoreType {
  areas: AreasType;
  nav: NavType;
  works: WorksType;
  media: MediaType;
}

export interface NavType {
  title: string;
  links: NavLinks;
}

export type NavLinks = Array<string>;

export interface ContainerType {
  namespace: string;
  children?: ContainerType | JSX.Element | Array<ContainerType | JSX.Element>;
}

export interface AreasType {
  active: string;
  portfolio: PortfolioType;
  research: ResearchType;
}

export interface AreaType {
  nav: NavType;
}

export interface PortfolioType extends AreaType {}

export interface ResearchType extends AreaType {}

export interface WorksType {
  [key: string]: WorkType;
}
export interface WorkType extends DB.Work {
  description: DescriptionType;
  visible: boolean;
}

export interface DescriptionType extends DB.Description {
  expanded?: boolean;
}

export interface ImageType extends DB.Image {}

export interface ExhibitionType extends DB.Exhibition {}

export interface VideoType extends DB.Video {}

export interface AudioType extends DB.Audio {}

export interface MediaType extends DB.Media {}

export interface MediaIndexType extends DB.MediaIndex {}
