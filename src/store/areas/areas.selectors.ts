import { createSelector } from 'reselect';

import {
  StoreType,
  AreasType,
  PortfolioType,
  ResearchType,
} from '../types';

import { areaConstants } from '../constants';
const { DEFAULT_AREA } = areaConstants;

function selectAreas(state: StoreType): AreasType {
  return state.areas;
}

const selectActiveArea = createSelector(
  selectAreas,
  (areas: AreasType): string => (
    areas.active ? areas.active : DEFAULT_AREA
  ),
);

const selectPortfolio = createSelector(
  selectAreas,
  (areas: AreasType): PortfolioType => (
    areas.portfolio ? areas.portfolio : null
  ),
);

const selectResearch = createSelector(
  selectAreas,
  (areas: AreasType): ResearchType => (
    areas.research ? areas.research : null
  ),
);

export {
  selectActiveArea,
  selectPortfolio,
  selectResearch,
};
