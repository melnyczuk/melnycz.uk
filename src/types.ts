export enum Currency {
  EUR = 'EUR',
  GBP = 'GBP',
  AUD = 'AUD',
}

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

export type MarkdownType = {
  body: string;
};

export type AboutType = MarkdownType & {
  links: Record<'name' | 'url', string>[];
  educations: [number, string, string][];
  exhibitions: [number, string][];
  residencies: [number, string][];
};

export type FeedEntryType = MarkdownType & {
  title: string;
  date: string;
  image: string;
  tags: string[];
};

export type ProjectType = MarkdownType & {
  name: string;
  year: number;
  hero: ImageType;
  images: ImageType[];
};

export type RssMetadataType = MarkdownType & {
  title: string;
  image_url: string;
  author: string;
  categories: string[];
  copyright: string;
  language: string;
  ttl: number;
};

export type WebsiteMetadataType = MarkdownType & {
  image: string;
  title: string;
  handle: string;
  url: string;
};

export type WritingPostType = MarkdownType & {
  slug: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
};
