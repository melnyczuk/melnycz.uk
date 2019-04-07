import { nav } from '../../../db/nav.json';
import { ActionType, NavType } from '../../types';

console.log('nav', nav);

export default (state: NavType[] = nav, action: ActionType) => {
  console.log('nav', state);
  return state;
};
