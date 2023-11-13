import { FeedEntryType } from '../../types';
import { parse } from '../parse';
import * as entries from './markdown';

export const feed = Object.values(entries)
  .map<FeedEntryType>(parse)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
