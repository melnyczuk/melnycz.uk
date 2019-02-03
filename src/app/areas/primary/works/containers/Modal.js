import { connect } from 'react-redux';

import Modal from '../../../../../components/modal/Modal';

import {
  selectWorkModalVisibility
} from '../../../../../store/areas/primary/works/works.selectors';

const mapStateToProps = (state, props) => {
  return {
    visible: selectWorkModalVisibility(state, props),
  }
};

export default connect(mapStateToProps)(Modal);