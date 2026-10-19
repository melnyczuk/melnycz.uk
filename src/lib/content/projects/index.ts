import type { ImageType, ProjectType } from '../../types';
import { byName } from '../glob';
import { parse } from '../parse';

type ProjectInfo = {
  slug: string;
  name: string;
  hero: number;
  year: number;
  hide: boolean;
  imgs: string[];
  body: string;
};

const projectData = byName(
  import.meta.glob<string>('./markdown/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })
);

const imageData = byName(
  import.meta.glob<Record<string, ImageType>>('./images/*.json', {
    import: 'default',
    eager: true,
  })
);

const ordering = [
  'season-of-the-orb',
  'drift-compass',
  'suntopia',
  'wool-gather',
  'silver-coord',
  'cone-of-power',
  'supercollager',
  'a-tree-grew-through-my-window',
  'object-permanence',
  'gail-the-bomachat',
  'ratio-club',
  'rrosetta',
  'on-the-side-of-every-mountain-is-another-smaller-mountain',
  'texture-cache',
];

export const projects: ProjectType[] = ordering
  .map((key) => {
    const markdown = projectData[key];
    const image = imageData[key];
    const projectInfo = parse<ProjectInfo>(markdown);
    const images = projectInfo.imgs.map((src) => image[src]);
    const hero = images[projectInfo.hero];
    return { ...projectInfo, images, hero };
  })
  .filter(({ hide }) => !hide);
