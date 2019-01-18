import React from 'react';
import { connect } from 'react-redux';

import Works from './Works';

import {
  selectPrimaryAreaState
} from '../../../store/areas/primary/primary.selectors';

function PrimaryArea({ classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <main className={className}>
      {children}
    </main>
  );
}

function mapWorksToChildren (state) {
  const { works = {} } = selectPrimaryAreaState(state);
  return Object.keys(works).map((key, i) => {
    const { namespace = undefined } = works[key];
    return (namespace && <Works key={i} namespace={namespace} />);
  })
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    children: mapWorksToChildren(state),
  };
};

export default connect(mapStateToProps)(PrimaryArea);
