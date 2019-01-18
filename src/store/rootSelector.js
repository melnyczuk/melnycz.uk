function getPropertyFromState (state, props, property, fallback) {
  return new Promise((resolve, reject) => {
    const { namespace } = props;
    const { works = {} } = state;
    if (works && works[namespace] && works[namespace][property]) {
      resolve(works[namespace][property]);
    };
    reject(fallback);
  });
};

export { getPropertyFromState };
