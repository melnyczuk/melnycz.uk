import React from 'react';
import { connect } from 'react-redux';

import Work from './primary/Work';

import {
  selectWorks,
} from '../../store/areas/primary/primary.selectors';

export const PrimaryArea = ({ works = [] }) => (
  <main className="main primary">
    {Object.keys(works).map(
      (key) => {
        const { namespace = undefined } = works[key];
        return (namespace && <Work key={namespace} namespace={namespace} />);
      },
    )}
  </main>
);

const mapStateToProps = (state) => {
  return {
    works: selectWorks(state),
  };
};

export default connect(mapStateToProps)(PrimaryArea);
