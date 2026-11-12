import type { CvType } from '../../types';
import cvAbout from './markdown/about.md?raw';
import cvContact from './markdown/contact.md?raw';
import cvEducation from './markdown/education.md?raw';
import cvJobs from './markdown/jobs.md?raw';
import cvProjects from './markdown/projects.md?raw';
import cvSkills from './markdown/skills.md?raw';

export const cv: CvType = {
  about: cvAbout,
  contact: cvContact,
  education: cvEducation,
  jobs: cvJobs,
  projects: cvProjects,
  skills: cvSkills,
};
