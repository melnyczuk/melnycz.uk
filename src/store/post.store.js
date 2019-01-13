// SELECTORS
export function selectPostTitle (state, namespace) {
  if (state && state.hasOwnProperty(namespace)) {
    const { title } = state[namespace];
    return title;
  }
  return null;
}