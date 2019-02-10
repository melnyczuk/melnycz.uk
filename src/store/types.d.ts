import DB from '../../db/types';
import { type } from 'os';

export interface ActionType {
  type: string;
  namespace: string;
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

export interface MediaType extends DB.Media {
  baseBinUrl: string;
}

export interface MediaIndexType extends DB.MediaIndex {}

export interface WorksType {
  [key: string]: WorkType;
}

export interface PortfolioType {
}

export interface ResearchType {

}

export interface AreasType {
  active: string;
  portfolio: PortfolioType;
  research: ResearchType;
}

export interface NavType {
  title: string;
  buttons: NavButtons;
}

export type NavButtons = Array<string>;

export interface StoreType {
  areas: AreasType;
  nav: NavType;
  works: WorksType;
  media: MediaType;
}

export interface ContainerType {
  namespace: string;
  children?: ContainerType | JSX.Element | Array<ContainerType | JSX.Element>;
}
