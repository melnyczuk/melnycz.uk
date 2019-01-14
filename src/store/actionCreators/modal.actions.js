import constants from '../constants';

const {
  SET_VISIBILITY
} = constants;

module.exports = {

  setModalVisibility: (payload) => {
    if (payload.namespace) {
      if (typeof payload.value === 'boolean') {
        return { type: SET_VISIBILITY, payload };
      }
    }
  }

};
