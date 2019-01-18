import { selectPrimaryAreaState } from '../primary.selectors';

const getWorkPropertyFromState = (state, props, property, fallback) => {
  const { namespace } = props;
  const { works = {} } = selectPrimaryAreaState(state);
  if (works && works[namespace] && works[namespace][property]) {
    return works[namespace][property];
  };
  return fallback;
};


function getWorkModalVisibility (state, props) {
  return getWorkPropertyFromState(state, props, 'visible', false);
}

function getWorkPostTitle (state, props) {
  return getWorkPropertyFromState(state, props, 'title', null);
}

function getWorkPunctumAltText (state, props) {
  return getWorkPropertyFromState(state, props, 'alt', null);
}

function getWorkPunctumSource (state, props) {
  return getWorkPropertyFromState(state, props, 'src', null);
}

export {
  getWorkModalVisibility,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource
}
