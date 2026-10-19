import { metadata } from '#lib';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => ({ website: metadata.website });
