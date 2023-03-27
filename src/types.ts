export type AboutType = {
  bio: string;
  links: Record<'name' | 'url', string>[];
  educations: [number, string, string][];
  exhibitions: [number, string][];
  residencies: [number, string][];
};

export type RemoteContentType = {
  raw: string;
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
