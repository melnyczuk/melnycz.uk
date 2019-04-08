import { nav } from '../../../db/nav.json';
import { ActionType, NavType } from '../../types';


export default (state: NavType[] = nav, action: ActionType) => state;
