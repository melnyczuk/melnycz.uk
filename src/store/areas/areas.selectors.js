import { createSelector } from 'reselect';

function selectAreas(state) {
  return state.areas;
}

const selectActiveArea = createSelector(
  selectAreas,
  areas => (areas.active ? areas.active : null),
);

const selectPrimaryArea = createSelector(
  selectAreas,
  areas => (areas.primary ? areas.primary : null),
);


export {
  selectActiveArea,
  selectPrimaryArea,
};
