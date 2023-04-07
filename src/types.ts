export type AboutType = {
  bio: string;
  links: Record<'name' | 'url', string>[];
  educations: [number, string, string][];
  exhibitions: [number, string][];
  residencies: [number, string][];
};

export type ProjectType = {
  name: string;
  year: number;
  description: string;
  image: ImageType;
};

export type ImageType = {
  name: string;
  src: string;
  width: number;
  height: number;
  thumbnail: string;
  caption?: string;
};

export enum Currency {
  EUR = 'EUR',
  GBP = 'GBP',
  AUD = 'AUD',
}

export type ServicesType = {
  unit: string;
  items: Array<{
    description: string;
    rate: number;
    quantity: number;
  }>;
};

export type BankDetailsType = Record<
  Currency,
  Array<Record<'key' | 'value', string>>
>;
