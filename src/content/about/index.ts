import { AboutType } from '../../types';
import { parse } from '../parse';
import markdown from './markdown/bio.md';

export const about = parse<AboutType>(markdown);
