import React from 'react';
import { connect } from 'react-redux';

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
    children: state[0].viewers[namespace].elements.map((el, i) => {
      const { namespace } = el;
      return (
        <div key={i} namespace={namespace}>
          <Punctum namespace={namespace} />
          <Modal namespace={namespace} />
        </div>
      );
    })
  };
};

export default connect(mapStateToProps)(Viewer);
