export interface Work {
  namespace: string;
  live: boolean;
  title: string;
  img: string;
  year: Array<number>;
  description: Description;
  media: MediaIndex;
  materials: Array<string>;
  type: Array<string>;
  links?: Array<string>;
  exhibitions?: Array<Exhibition>;
}

export interface Description {
  short: string;
  long?: string;
  mid?: string;
}

export interface Exhibition {
  name: string;
  curator?: Array<string>;
  place: string;
  city: string;
  country: string;
  geo: Array<number>;
  date: Array<number>;
  media: MediaIndex;
  links?: Array<string>;
}

export interface MediaIndex {
  imageKeys: Array<string>;
  videoKeys: Array<string>;
  audioKeys: Array<string>;
}

export interface Media {
  baseURL: string;
  images?: Array<Image>;
  videos?: Array<Video>;
  audios?: Array<Audio>;
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
  works: Array<Work>;
  writing: Array<Writing>;
}
