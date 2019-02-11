import { ActionType, AreasType } from '../types';

const areas: AreasType = {
  active: 'portfolio',
  portfolio: null,
  research: null,
}

export default (state: AreasType = areas, action: ActionType) => state;
