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
  geolocation: Array<number>;
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
