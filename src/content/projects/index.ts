import fm from 'front-matter';

import aTreeGrewThroughMyWindow from './markdown/a-tree-grew-through-my-window.md';
import coneOfPower from './markdown/cone-of-power.md';
import gailTheBomachat from './markdown/gail-the-bomachat.md';
import objectPermanence from './markdown/object-permanence.md';
import otsoemiasm from './markdown/on-the-side-of-every-mountain-is-another-smaller-mountain.md';
import ratioClub from './markdown/ratio-club.md';
import rrosetta from './markdown/rrosetta.md';
import silverCoord from './markdown/silver-coord.md';
import supercollager from './markdown/supercollager.md';
import textureCache from './markdown/texture-cache.md';
import woolGather from './markdown/wool-gather.md';

type ProjectInfo = {
  slug: string;
  name: string;
  hero: string;
  year: number;
  hide: boolean;
  description: string;
};

export const projects: ProjectInfo[] = [
  woolGather,
  silverCoord,
  coneOfPower,
  supercollager,
  aTreeGrewThroughMyWindow,
  objectPermanence,
  gailTheBomachat,
  ratioClub,
  rrosetta,
  otsoemiasm,
  textureCache,
].map((project) => {
  const { body, attributes } = fm<Omit<ProjectInfo, 'description'>>(project);
  return { description: body, ...attributes };
});
