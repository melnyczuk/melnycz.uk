import fm from 'front-matter';

import { ProjectType } from '../../types';
import * as imageData from './images';
import * as projectData from './markdown';

type ProjectInfo = {
  slug: string;
  name: string;
  hero: number;
  year: number;
  hide: boolean;
  imgs: string[];
};

const ordering: (keyof typeof projectData)[] = [
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
    const project = projectData[key];
    const image = imageData[key];
    const { body, attributes } = fm<ProjectInfo>(project);
    const images = attributes.imgs.map((src) => image[src]);
    const hero = images[attributes.hero];
    return { ...attributes, description: body, images, hero };
  })
  .filter(({ hide }) => !hide);
