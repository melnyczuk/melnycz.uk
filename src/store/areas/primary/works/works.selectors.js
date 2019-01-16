import { selectPrimaryAreaState } from '../main.selectors';

const getWorkPropertyFromState = (state, namespace, property) => {
  const { works } = selectPrimaryAreaState(state);
  if (works && works.hasOwnProperty(namespace)) {
    return works[namespace][property];
  };
  return null;
};

module.exports = {
  getWorkModalVisibility: (state, props) => {
    const { namespace } = props;
    getWorkPropertyFromState(state, namespace, 'visible')
  },
  getWorkPunctumAltText: (state, props) => {
    const { namespace } = props;
    getWorkPropertyFromState(state, namespace, 'alt')
  },
  getWorkPunctumSource: (state, props) => {
    const { namespace } = props;
    getWorkPropertyFromState(state, namespace, 'src')
  },
};
