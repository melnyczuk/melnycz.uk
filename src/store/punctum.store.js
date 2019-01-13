const initialState = {};

const constants = {};

const actionCreators = {};

const punctumReducer = (state = initialState, action) => {
  return state
};

const selectors = {
  selectPunctumImageSource: (state, namespace) => {
    if (state && state.hasOwnProperty(namespace)) {
      const { src } = state[namespace];
      return src;
    }
    return null;
  },

  selectPunctumImageAltText: (state, namespace) => {
    if (state && state.hasOwnProperty(namespace)) {
      const { alt } = state[namespace];
      return alt;
    }
    return null;
  }
};

module.exports = {
  initialState,
  constants,
  actionCreators,
  punctumReducer,
  selectors
}