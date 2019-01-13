
const initialState = {}

const constants = {
  SET_VISIBILITY: 'SET_VISIBILITY'
};

const actionCreators = {
  setModalVisibility: (payload) => {
    if (payload.namespace){
      if (payload.value === false) {
        return { type: constants.SET_VISIBILITY, payload };
      }
      if (payload.value === true) {
        return { type: constants.SET_VISIBILITY, payload }
      }
    }
  }
};
  
const reducers = {
  reduceModal: (state = initialState, action) => {
    if (action.type === constants.SET_VISIBILITY) {
      return {
        ...state,
        [action.payload.namespace]: {
          visible: action.payload.value
        }
      }
    }
    return state;
  }
};

const selectors = {
  selectModalVisibility: (state, namespace) => {
    if (state && state.hasOwnProperty(namespace)){
      const { visible } = state[namespace];
      return visible;
    };
    return false;
  }
};

module.exports = {
  initialState,
  constants,
  actionCreators,
  reducers,
  selectors
}