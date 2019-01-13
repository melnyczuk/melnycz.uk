import React from 'react';
import { connect } from 'net';

import Modal from '../modal/Modal';
import Punctum from '../punctum/Punctum';

function Viewer({ classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { namespace } = props;
  return {
    ...props,
    children: state.viewers[namespace].elements.map(el => {
      const { namespace } = el;
      return (
        <div namespace={namespace}>
          <Punctum namespace={namespace} />
          <Modal namespace={namespace} />
        </div>
      )
    })
  }
};

export default connect(mapStateToProps)(Viewer);