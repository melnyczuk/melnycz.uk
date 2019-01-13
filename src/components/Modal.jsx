import React from 'react';
import { connect } from 'react-redux';

import { 
  setModalVisiblity, 
  selectModalVisibility 
} from '../store/modal.store';


function Modal ({ visible, classes = [], children = []}) {
  if (visible) {
    const className = [...classes].join(' ') || null;
    return (
      <div className={className} >
        {children}
      </div>
    );
  }
  return null;
}

const mapStateToProps = (state, props) => {
  const { namespace } = props;
  return {
    ...props,
    visible: selectModalVisibility(state, namespace),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    onHide: () => dispatch(setModalVisiblity({ namespace, value: false })),
    onShow: () => dispatch(setModalVisiblity({ namespace, value: true }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
