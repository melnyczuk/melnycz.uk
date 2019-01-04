import { connect } from 'react-redux';

import Modal from '../components/Modal';
import { setModalVisiblity } from '../store/modal.store';

function mapDispatchToProps(dispatch) {
  return {
    onClick: (visibility) => dispatch(setModalVisiblity(visibility))
  }
}

connect(mapDispatchToProps)(Modal);
export default Modal;
