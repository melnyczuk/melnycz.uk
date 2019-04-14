import { ActionType } from '../../types';
import { actionConstants } from '../constants';

const {
  SET_ACTIVE,
} = actionConstants;

export default (state: string = 'Portfolio', action: ActionType) => {
  if (!action) return state;

  const { type, namespace } = action;

  switch (type) {
    default: return state;
    case (SET_ACTIVE): return namespace;
  }

};
