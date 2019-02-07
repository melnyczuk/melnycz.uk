import { actionConstants } from '../../../constants';

const {
  SET_VISIBLE,
} = actionConstants;

const setModalVisibility = namespace => ({ type: SET_VISIBLE, namespace });

export { setModalVisibility };
