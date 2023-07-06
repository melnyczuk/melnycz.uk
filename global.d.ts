declare module '*.scss' {
  const scss: Record<string, string>;
  export default scss;
}

declare module '*.md' {
  const md: string;
  export default md;
}

type RssItem = {
  title: string;
  description: string;
  date: Date | string;
  url: string;
  guid?: string;
  categories?: string[];
  author?: string;
  lat?: number;
  long?: number;
  enclosure?: unknown;
  custom_elements?: unknown;
};

type RssOptions = {
  title: string;
  feed_url: string;
  site_url: string;
  description?: string;
  generator?: string;
  image_url?: string;
  author?: string;
  categories?: string[];
  pubDate?: Date | string;
  hub?: string;
  copyright?: string;
  language?: string;
  managingEditor?: string;
  webMaster?: string;
  ttl?: number;
  geoRSS?: unknown;
  custom_namespaces?: unknown;
  custom_elements?: unknown[];
  items?: RssItem[];
};

declare module 'rss' {
  class RSS {
    constructor(options: RssOptions): void;
    xml(): string;
    item(i: RssItem): void;
  }
  export default RSS;
}
