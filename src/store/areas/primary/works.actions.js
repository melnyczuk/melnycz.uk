import { actionConstants } from '../../constants';

const {
  SET_VISIBLE
} = actionConstants;

const setWorkModalVisibility = (namespace) => {
  return { type: SET_VISIBLE, namespace };
};

export { setWorkModalVisibility };
