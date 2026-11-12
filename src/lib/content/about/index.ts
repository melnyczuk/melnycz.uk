import type { AboutType } from '../../types';
import { parse } from '../parse';
import markdown from './markdown/bio.md?raw';

export const about = parse<AboutType>(markdown);
