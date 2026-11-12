import { error } from '@sveltejs/kit';

import { writing } from '#lib';

import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
  writing.map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const post = writing.find((p) => p.slug === params.slug);
  if (!post) error(404, 'Writing not found');
  return { post };
};
