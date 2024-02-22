import { ProjectType } from '../../types';
import { parse } from '../parse';
import * as imageData from './images';
import * as projectData from './markdown';

type ProjectInfo = {
  slug: string;
  name: string;
  hero: number;
  year: number;
  hide: boolean;
  imgs: string[];
  body: string;
};

const ordering: (keyof typeof projectData)[] = [
  'seasonOfTheOrb',
  'driftCompass',
  'suntopia',
  'woolGather',
  'silverCoord',
  'coneOfPower',
  'supercollager',
  'aTreeGrewThroughMyWindow',
  'objectPermanence',
  'gailTheBomachat',
  'ratioClub',
  'rrosetta',
  'otsoemiasm',
  'textureCache',
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
