export interface Work {
  title: string;
  year: number[];
  punctum: number;
  media: {
    images: Image[];
    videos: Video[];
  };
}

interface Media {
  index: number;
  type: string;
}

export interface Image extends Media {
  alt: string;
}

export interface Video extends Media {
  url: string;
  description: string[];
}
