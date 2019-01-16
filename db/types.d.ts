export interface Work {
  namespace: string;
  keyImg: string;
  live: boolean;
  path: string;
  title: string;
  year: Array<number>;
  type: Array<string>;
  materials: Array<string>;
  description: Description;
  href?: string;
  links?: Array<string>;
  media?: Media;
  exhibitions?: Array<Exhibition>;
}

export interface Description {
  short?: string;
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
  media: Media;
  links?: Array<string>;
}

export interface Media {
  images?: Array<Image>;
  video?: Array<Video>;
  audio?: Array<Audio>;
}

export interface Image {
  src: string;
  title?: string;
  alt?: string;
  description?: Description;
}

export interface Video {
  src: string;
  title?: string;
  alt?: string;
  length?: number;
  description?: Description;
}

export interface Audio {
  src: string;
  title?: string;
  alt?: string;
  length?: number;
  description?: Description;
}
