import { MetadataType } from '../../types';
import { parse } from '../parse';
import markdown from './markdown/metadata.md';

export const metadata = parse<MetadataType>(markdown);
