import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../../../components/modal/Modal';

import {
  getWorkModalVisibility
} from '../../../../store/areas/primary/works.selectors';

const mapStateToProps = (state, props) => {
  return {
    visible: getWorkModalVisibility(state, props),
  }
};

export default connect(mapStateToProps)(
  ({ visible, children }) => {
    return (
    <Modal visible={visible} >
      {children}
    </Modal>
    )
  }
);