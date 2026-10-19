import { error } from '@sveltejs/kit';

import { projects } from '#lib';

import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
  projects.map(({ slug }) => ({ project: slug }));

export const load: PageServerLoad = ({ params }) => {
  const project = projects.find((p) => p.slug === params.project);
  if (!project) error(404, 'Project not found');
  return { project };
};
