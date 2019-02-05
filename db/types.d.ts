export interface Work {
  namespace: string;
  live: boolean;
  title: string;
  src: string;
  year: Array<number>;
  description: Description;
  media: Media;
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
  media: Media;
  links?: Array<string>;
}

export interface Media {
  images?: Array<Image>;
  video?: Array<Video>;
  audio?: Array<Audio>;
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
