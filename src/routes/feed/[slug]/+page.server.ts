import { error } from '@sveltejs/kit';

import { feed } from '#lib';

import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
  feed.map(({ date }) => ({ slug: date }));

export const load: PageServerLoad = ({ params }) => {
  const post = feed.find((p) => p.date === params.slug);
  if (!post) error(404, 'Feed entry not found');
  return { post };
};
