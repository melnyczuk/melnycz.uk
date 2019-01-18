import constants from '../../../constants';

const {
  SET_VISIBLE
} = constants;

const setWorkModalVisible = (namespace) => {
  return { type: SET_VISIBLE, namespace };
};

export { setWorkModalVisible };
