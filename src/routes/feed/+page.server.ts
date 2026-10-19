import { feed } from '#lib';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ entries: feed });
