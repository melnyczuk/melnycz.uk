import { WritingPostType } from '../../types';
import { parse } from '../parse';
import * as posts from './markdown';

export const writing = Object.values(posts).map<WritingPostType>(parse);
