import { connect } from 'react-redux';

import Modal from '../../../../../components/modal/Modal';

import {
  modal,
} from '../../../../../store/areas/primary/works/works.selectors';

const mapStateToProps = (state, props) => ({
  visible: modal.selectVisible(state, props),
});

export default connect(mapStateToProps)(Modal);
