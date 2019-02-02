import React from 'react';
import { connect } from 'react-redux';

import PrimaryArea from './primary/Primary';

import {
  getActiveArea,
  getWorks
} from '../../store/areas/areas.selectors';

export const Areas = ({
  active,
  works,
}) => {
  switch (active) {
    default: {
      return (<PrimaryArea works={works} />);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    active: getActiveArea(state),
    works: getWorks(state),
  }
};

export default connect(mapStateToProps)(Areas);