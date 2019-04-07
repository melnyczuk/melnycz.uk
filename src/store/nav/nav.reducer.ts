import * as nav from '../../../db/nav.json';
import { ActionType, NavType } from '../../types';


export default (state: NavType[] = Object.values(nav), action: ActionType) => {
  console.trace('nav', state);
  return state
};
