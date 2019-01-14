module.exports = {
  selectModalVisibility: (state, namespace) => {
    if (state && state.hasOwnProperty(namespace)){
      const { visible } = state[namespace];
      return visible;
    };
    return false;
  }
};
