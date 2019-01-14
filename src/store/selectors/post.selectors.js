module.exports = {
  selectPostTitle: (state, namespace) => {
    if (state && state.hasOwnProperty(namespace)) {
      const { title } = state[namespace];
      return title;
    }
    return null;
  }
};
