import React from 'react';
import { connect } from 'react-redux';

import Portfolio from './portfolio';

import {
  selectActiveArea,
  selectPortfolio,
  selectResearch,
} from '../../store/areas/areas.selectors';

import {
  StoreType,
  AreasType,
} from '../../store/types';

const Areas = (
  {
    active,
  }: AreasType
): JSX.Element => {
  switch (active) {
    default: return (<Portfolio />)
  }
};

const mapStateToProps = (state: StoreType) => {
  return {
    active: selectActiveArea(state),
    portfolio: selectPortfolio(state),
    research: selectResearch(state),
  };
};

export default connect
  <AreasType, AreasType, any>
  (mapStateToProps)
  (Areas);
