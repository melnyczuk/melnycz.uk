export type RemoteContentType = {
  local: string | null;
  url: string;
};

export type AboutType = {
  bio: RemoteContentType;
  links: Record<'name' | 'url', string>[];
  educations: [number, string, string][];
  exhibitions: [number, string][];
  residencies: [number, string][];
};

export type ProjectType = {
  name: string;
  year: number;
  description: RemoteContentType;
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
