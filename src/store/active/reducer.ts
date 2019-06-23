import { ActionType } from '../../types';
import { actionConstants } from '../constants';

const {
  SET_ACTIVE,
} = actionConstants;


export default (state: string = 'Portfolio', { type, namespace }: ActionType) => {
  switch (type) {
    default: return state;
    case (SET_ACTIVE): return namespace;
  }
};
