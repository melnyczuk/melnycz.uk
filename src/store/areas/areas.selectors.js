function selectAreas (state, props, options) {
  return new Promise ((resolve, reject) => {
    resolve(state.areas);
    reject(options.fallback || null);
  })
}
