import { actionConstants } from '../constants';
import { ActionType } from '../../types';

const { SET_ACTIVE } = actionConstants;

const setActive = (active: string): ActionType => ({
  type: SET_ACTIVE,
  namespace: active
});

export { setActive };
