import type { RssMetadataType, WebsiteMetadataType } from '../../types';
import { parse } from '../parse';
import rss from './markdown/rss.md?raw';
import website from './markdown/website.md?raw';

export const metadata = {
  rss: parse<RssMetadataType>(rss),
  website: parse<WebsiteMetadataType>(website),
};
