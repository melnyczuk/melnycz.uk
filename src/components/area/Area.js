import React from 'react';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import Punctum from '../punctum/Punctum';

function Area({ classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <section className={className}>
      {children}
    </section>
  );
}

function mapWorksToChildren (state, props) {
  const { works } = state.areas[props.namespace];
  return Object.keys(works).map((key, i) => {
    const { namespace } = works[key];
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

export default connect(mapStateToProps, mapDispatchToProps)(Area);
