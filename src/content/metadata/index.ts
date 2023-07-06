import { RssMetadataType, WebsiteMetadataType } from '../../types';
import { parse } from '../parse';
import rss from './markdown/rss.md';
import website from './markdown/website.md';

export const metadata = {
  rss: parse<RssMetadataType>(rss),
  website: parse<WebsiteMetadataType>(website),
};
