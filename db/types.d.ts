export interface Work {
  namespace: string;
  live: boolean;
  title: string;
  img: string;
  year: number[];
  description: Description;
  media: MediaIndex;
  materials: string[];
  type: string[];
  links?: string[];
  exhibitions?: Exhibition[];
}

export interface Description {
  short: string;
  long?: string;
  mid?: string;
}

export interface Exhibition {
  title: string;
  space: string;
  city: string;
  country: string;
  geo: number[];
  dates: number[];
  media: MediaIndex;
  curator?: string[];
  links?: string[];
}

export interface MediaIndex {
  imageKeys: string[];
  videoKeys: string[];
  audioKeys: string[];
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
  title?: string;
  rank?: number;
  description?: Description;
}

export interface Video {
  id: string;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: Description;
}

export interface Audio {
  id: string;
  path: string;
  ext: string;
  title?: string;
  duration?: number;
  description?: Description;
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
