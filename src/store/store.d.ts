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

export interface Audio extends DB.Audio {}

export interface Media extends DB.Media {
  baseBinUrl: string;
}

export interface MediaIndex extends DB.MediaIndex {}

export interface Works {
  [key: string]: Work;
}

export interface Primary {}

export interface Areas {
  active: string;
  primary: Primary;
}

export interface Nav {
  buttons: Array<string>;
}

export interface StoreState {
  areas: Areas;
  nav: Nav;
  works: Works;
  media: Media;
}

export interface Container {
  namespace: string;
  children?: Container | JSX.Element | Array<Container | JSX.Element>;
}
