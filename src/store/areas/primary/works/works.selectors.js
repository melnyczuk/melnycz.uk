import { selectPrimaryAreaState } from '../primary.selectors';

const getWorkPropertyFromState = (state, props, property, fallback) => {
  const { namespace } = props;
  const { works = {} } = selectPrimaryAreaState(state);
  if (works && works[namespace] && works[namespace][property]) {
    return works[namespace][property];
  };
  return fallback;
};

module.exports = {
  getWorkModalVisibility: (state, props) => {
    return getWorkPropertyFromState(state, props, 'visible', false);
  },
  getWorkPostTitle: (state, props) => {
    return getWorkPropertyFromState(state, props, 'title', null);
  },
  getWorkPunctumAltText: (state, props) => {
    return getWorkPropertyFromState(state, props, 'alt', null);
  },
  getWorkPunctumSource: (state, props) => {
    return getWorkPropertyFromState(state, props, 'src', null);
  },
};
