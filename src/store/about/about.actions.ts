import { actionConstants } from '../constants';
import { ActionType } from '../types';

const {
  SET_TITLE,
} = actionConstants;

const setTitle = (title: string): ActionType => {
  return { type: SET_TITLE, namespace: title }
};

export {
  setTitle,
};
