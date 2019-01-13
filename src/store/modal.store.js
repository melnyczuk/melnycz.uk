
const initialState = {}

const constants = {
  SET_VISIBILITY: 'SET_VISIBILITY'
};

const actionCreators = {
  setModalVisibility: (payload) => {
    if (payload.namespace) {
      if (typeof payload.value === 'boolean') {
        return { type: constants.SET_VISIBILITY, payload };
      }
    }
  }
};
  
const reducers = {
  reduceModal: (state = initialState, action = {}) => {
    if (!(
      action.payload && 
      action.payload.hasOwnProperty('namespace') && 
      action.payload.hasOwnProperty('value')
    )) {
      return state;
    }

    if (action.type === constants.SET_VISIBILITY) {
      const { [action.payload.namespace]: namespaceNode } = state;
      return {
        ...state,
        [action.payload.namespace]: {
          ...namespaceNode,
          visible: action.payload.value
        }
      }
    }
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