function reduceState (state, keys) {
  if (keys.length === 1) return (state[keys[0]]);
  if (state && state[keys[0]]) {
    return reduceState(state[keys[0]], [...keys.slice(1)]);
  }
  return null;
}

export {
  reduceState
};
