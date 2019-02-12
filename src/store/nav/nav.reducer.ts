import { ActionType, NavType } from '../types';

const nav = { title: 'hi', buttons: [ 'Portfolio', 'Research' ] };

export default (state: NavType = nav, action: ActionType) => state;
