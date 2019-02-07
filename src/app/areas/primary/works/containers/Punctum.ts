import { connect } from 'react-redux';

import Punctum from '../../../../../components/punctum/Punctum';

import {
  punctum,
} from '../../../../../store/areas/primary/works/works.selectors';

import {
  setModalVisibility,
} from '../../../../../store/areas/primary/works/works.actions';

const mapStateToProps = (state, props) => ({
  alt: punctum.selectAlt(state, props),
  src: punctum.selectSrc(state, props),
});

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    showModal: () => dispatch(setModalVisibility(namespace)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Punctum);
