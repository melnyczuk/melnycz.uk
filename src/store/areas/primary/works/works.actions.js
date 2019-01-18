import constants from '../../../constants';

const {
  SET_VISIBILE
} = constants;

const setWorkModalVisibility = (payload) => {
  return { type: SET_VISIBILE, payload };
};

export { setWorkModalVisibility };
