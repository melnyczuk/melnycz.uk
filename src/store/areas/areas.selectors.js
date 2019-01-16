

module.exports = {
  selectArea: (state, props) => {
    const { namespace } = props;
    return state.areas[namespace];
  }
}
