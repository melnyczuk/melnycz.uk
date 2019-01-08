import { connect } from 'react-redux';

import Modal from '../components/Modal';
import { setModalVisiblity, selectModalVisibility } from '../store/modal.store';

const mapStateToProps = state => {
  return {
    visible: selectModalVisibility(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (visibility) => dispatch(setModalVisiblity(visibility))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
