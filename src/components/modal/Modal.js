import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../store/actionCreators';
import selectors from '../../store/selectors';

const { setModalVisibility } = actionCreators.modal;
const { selectModalVisibility } = selectors.modal;

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
    visible: selectModalVisibility(state, namespace)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    hide: () => dispatch(setModalVisibility({ namespace, value: false }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
