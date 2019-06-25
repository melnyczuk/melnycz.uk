import { works } from '../../../db/works.json';
import { ActionType, WorkType } from '../../types';

const nav = [...new Set<string>(works.map(({ area }: WorkType) => area))];

export default (state: string[] = nav, action: ActionType) => state;
