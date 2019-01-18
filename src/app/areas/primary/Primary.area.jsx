import React from 'react';
import { connect } from 'react-redux';

import Work from './Work';

import {
  reduceState
} from '../../../store/utils';

function PrimaryArea({ classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <main className={className}>
      {children}
    </main>
  );
}

function mapWorksToChildren (state) {
  const works = reduceState(state, ['areas', 'primary', 'works'], null);
  return Object.keys(works).map((key, i) => {
    const { namespace = undefined } = works[key];
    return (namespace && <Work key={i} namespace={namespace} />);
  })
}

const mapStateToProps = (state) => {
  return {
    children: mapWorksToChildren(state),
  }
};

export default connect(mapStateToProps)(PrimaryArea);
