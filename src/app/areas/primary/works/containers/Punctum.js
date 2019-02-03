import { connect } from 'react-redux';

import Punctum from '../../../../../components/punctum/Punctum';

import {
  selectWorkPunctumAltText,
  selectWorkPunctumSource,
} from '../../../../../store/areas/primary/works/works.selectors';

import {
  setWorkModalVisibility
} from '../../../../../store/areas/primary/works/works.actions';

const mapStateToProps = (state, props) => {
  return {
    alt: selectWorkPunctumAltText(state, props),
    src: selectWorkPunctumSource(state, props),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => dispatch(setWorkModalVisibility),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Punctum);