import { writing } from '#lib';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  posts: writing.map(({ slug, title, date }) => ({ slug, title, date })),
});
