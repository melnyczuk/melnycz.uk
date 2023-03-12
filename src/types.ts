export type RemoteContentType = {
  content: string;
  url: string;
};

export type ProjectType = {
  name: string;
  year: number;
  description: string;
  image: ImageType;
};

export type ImageType = {
  name: string;
  url: string;
  width: number;
  height: number;
  thumbnail: string;
  caption?: string;
};
