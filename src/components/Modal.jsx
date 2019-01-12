import React from 'react';
import { connect } from 'react-redux';

import { 
  setModalVisiblity, 
  selectModalVisibility 
} from '../store/modal.store';


export function Modal ({ visible = false, classes = [], children = [] }) {
  if (visible) {
    return (
      <div className={[...classes].join(' ')} >
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: selectModalVisibility(state),
    classes: state.classes,
    children: state.children
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHide: () => dispatch(setModalVisiblity(false)),
    onShow: () => dispatch(setModalVisiblity(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
