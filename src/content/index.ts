import fm from 'front-matter';

import { AboutType, CvType } from '../types';
import bio from './about/bio.md';
import cvAbout from './cv/about.md';
import cvContact from './cv/contact.md';
import cvEducation from './cv/education.md';
import cvJobs from './cv/jobs.md';
import cvProjects from './cv/projects.md';
import cvSkills from './cv/skills.md';
import aTreeGrewThroughMyWindow from './projects/a-tree-grew-through-my-window.md';
import coneOfPower from './projects/cone-of-power.md';
import gailTheBomachat from './projects/gail-the-bomachat.md';
import objectPermanence from './projects/object-permanence.md';
import otsoemiasm from './projects/on-the-side-of-every-mountain-is-another-smaller-mountain.md';
import ratioClub from './projects/ratio-club.md';
import rrosetta from './projects/rrosetta.md';
import silverCoord from './projects/silver-coord.md';
import supercollager from './projects/supercollager.md';
import textureCache from './projects/texture-cache.md';
import woolGather from './projects/wool-gather.md';

type ProjectInfo = {
  slug: string;
  name: string;
  hero: string;
  year: number;
  hide: boolean;
  description: string;
};

const aboutData = fm<Omit<AboutType, 'bio'>>(bio);

export const about: AboutType = {
  bio: aboutData.body,
  ...aboutData.attributes,
};

export const cv: CvType = {
  about: cvAbout,
  contact: cvContact,
  education: cvEducation,
  jobs: cvJobs,
  projects: cvProjects,
  skills: cvSkills,
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
