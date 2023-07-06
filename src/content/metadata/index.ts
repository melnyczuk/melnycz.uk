import { WebsiteMetadataType } from '../../types';
import { parse } from '../parse';
import website from './markdown/website.md';

export const metadata = {
  website: parse<WebsiteMetadataType>(website),
};
