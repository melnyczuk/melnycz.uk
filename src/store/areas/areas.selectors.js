import { createSelector } from 'reselect';

function getAreas(state) {
  return state.areas;
}

const getActiveArea = createSelector(
  getAreas,
  areas => areas.active ? areas.active : null
);

const getPrimaryArea = createSelector(
  getAreas,
  areas => areas.primary ? areas.primary : null
);


export {
  getActiveArea,
  getPrimaryArea,
};