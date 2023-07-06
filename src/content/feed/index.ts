import { FeedEntryType } from '../../types';
import { parse } from '../parse';
import * as entries from './markdown';

export const feed = Object.values(entries).map<FeedEntryType>(parse);
