import { navs } from '../../../db/db.json';

import { ActionType, NavType } from '../types';

export default (state: NavType = navs, action: ActionType) => state;
