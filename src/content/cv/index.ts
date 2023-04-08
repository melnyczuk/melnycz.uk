import { CvType } from '../../types';
import cvAbout from './markdown/about.md';
import cvContact from './markdown/contact.md';
import cvEducation from './markdown/education.md';
import cvJobs from './markdown/jobs.md';
import cvProjects from './markdown/projects.md';
import cvSkills from './markdown/skills.md';

export const cv: CvType = {
  about: cvAbout,
  contact: cvContact,
  education: cvEducation,
  jobs: cvJobs,
  projects: cvProjects,
  skills: cvSkills,
};
