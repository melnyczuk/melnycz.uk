export enum Currency {
  EUR = 'EUR',
  GBP = 'GBP',
  AUD = 'AUD',
}

export type AboutType = {
  bio: string;
  links: Record<'name' | 'url', string>[];
  educations: [number, string, string][];
  exhibitions: [number, string][];
  residencies: [number, string][];
};

export type CvType = {
  about: string;
  contact: string;
  education: string;
  jobs: string;
  projects: string;
  skills: string;
};

export type ImageType = {
  name: string;
  src: string;
  width: number;
  height: number;
  thumbnail: string;
  caption?: string;
};

export type InvoiceType = {
  address: string[];
  bankDetails: Record<Currency, Array<Record<'key' | 'value', string>>>;
  client: string[];
  currency: Currency;
  locale: string;
  reference: string;
  showVatDisclaimer: boolean;
  services: {
    unit: string;
    items: Array<{ description: string; rate: number; quantity: number }>;
  };
};

export type ProjectType = {
  name: string;
  year: number;
  description: string;
  image: ImageType;
};

export type WritingPostType = {
  slug: string;
  title: string;
  date: string;
  content: string;
};
