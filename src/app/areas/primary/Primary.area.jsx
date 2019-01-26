import React from 'react';
import { connect } from 'react-redux';

import Work from './Work';

import {
  reduceState
} from '../../../store/utils';

const PrimaryArea = (
  {
    className,
    children = []
  }
) => {
  return (
    <main className={className}>
      {children}
    </main>
  );
};

const mapWorksToChildren = (state) => {
  const works = reduceState(state, ['areas', 'primary', 'works'], null);
  return Object.keys(works).map((key, i) => {
    const { namespace = undefined } = works[key];
    return (namespace && <Work key={i} namespace={namespace} />);
  })
};

const mapStateToProps = (state, props) => {
  const { classes = [] } = props;
  return {
    className: [...classes].join(' ') || null,
    children: mapWorksToChildren(state),
  }
};

export default connect(mapStateToProps)(PrimaryArea);
