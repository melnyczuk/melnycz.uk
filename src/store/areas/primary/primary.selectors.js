import { createSelector } from 'reselect';

import { selectPrimaryArea } from '../areas.selectors';

const selectWorks = createSelector(
  selectPrimaryArea,
  primary => primary.works ? primary.works : null
);

export {
  selectWorks,
}