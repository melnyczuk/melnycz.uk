import React from 'react';
import { connect } from 'react-redux';

import PrimaryArea from './primary/Primary';

import {
  selectActiveArea,
} from '../../store/areas/areas.selectors';

export const Areas = ({
  active,
}) => {
  switch (active) {
    default: {
      return (<PrimaryArea />);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    active: selectActiveArea(state)
  }
};

export default connect(mapStateToProps)(Areas);