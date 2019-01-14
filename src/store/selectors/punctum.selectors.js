module.exports = {

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
