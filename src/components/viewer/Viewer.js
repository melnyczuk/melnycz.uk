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

function mapWorksToChildren (state, props) {
  const { namespace } = props;
  const { works } = state.viewers[namespace];
  return Object.keys(works).map((key, i) => {
    return (
      <div key={i} namespace={namespace}>
        <Punctum namespace={namespace} />
        <Modal namespace={namespace} />
      </div>
    );
  })
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    children: mapWorksToChildren(state, props)
  };
};

const mapDispatchToProps = (state, props) => {
  return { ...props }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
