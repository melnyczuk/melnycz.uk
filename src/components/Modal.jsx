import React from 'react';
import { connect } from 'react-redux';

import modal from '../store/modal.store';
const { setModalVisibility } = modal.actionCreators;
const { selectModalVisibility } = modal.selectors;

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
    onHide: () => dispatch(setModalVisibility({ namespace, value: false })),
    onShow: () => dispatch(setModalVisibility({ namespace, value: true }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
