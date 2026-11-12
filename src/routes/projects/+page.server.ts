import { projects } from '#lib';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ projects });
