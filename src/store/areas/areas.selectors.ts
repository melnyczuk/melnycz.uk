import { createSelector } from 'reselect';
import { StoreState, Areas, Primary } from '../store';
import { DEFAULT_AREA } from '../initialState';

function selectAreas(state: StoreState): Areas {
  return state.areas;
}

const selectActiveArea = createSelector(
  selectAreas,
  (areas: Areas): string => (
    areas.active ? areas.active : DEFAULT_AREA
  ),
);

const selectPrimaryArea = createSelector(
  selectAreas,
  (areas: Areas): Primary | null => (
    areas.primary ? areas.primary : null
  ),
);

export {
  selectActiveArea,
  selectPrimaryArea,
};
