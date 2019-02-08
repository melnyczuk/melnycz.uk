import DB from '../../db/types.d';
import { type } from 'os';

export interface Action {
  type: string;
  namespace: string;
}

export interface Work extends DB.Work {
  description: Description;
  visible: boolean;
}

export interface Description extends DB.Description {
  expanded?: boolean;
}

export interface Image extends DB.Image {}

export interface Exhibition extends DB.Exhibition {}

export interface Video extends DB.Video {}

export interface Media extends DB.Media {}

export interface Works {
  [key: string]: Work;
}

export interface Primary {
  baseBinUrl: string;
  works: Works;
}

export interface Areas {
  active: string;
  primary: Primary;
}

export enum NavButtonLabel { string }

export interface Nav {
  buttons: Array<NavButtonLabel>;
}

export interface StoreState {
  areas: Areas;
  nav: Nav;
}

export interface Container {
  namespace: string;
  children?: Container | JSX.Element | Array<Container | JSX.Element>;
}
