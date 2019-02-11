import { ActionType, NavType } from '../types';

const nav = { title: 'hi', buttons: [ 'Art', 'Code' ] };

export default (state: NavType = nav, action: ActionType) => state;
