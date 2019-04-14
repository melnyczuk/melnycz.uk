import { actionConstants } from '../constants';
import { ActionType } from '../../types';

const { SET_ACTIVE } = actionConstants;

function setActive(active: string): ActionType {
  return { type: SET_ACTIVE, namespace: active }
};

export {
  setActive,
};
