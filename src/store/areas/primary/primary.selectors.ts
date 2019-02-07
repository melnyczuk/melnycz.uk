import { createSelector } from 'reselect';

import { selectPrimaryArea } from '../areas.selectors';

const selectWorks = createSelector(
  selectPrimaryArea,
  primary => (primary.works ? primary.works : null),
);

const selectBinBaseUrl = createSelector(
  selectPrimaryArea,
  primary => (primary.baseBinUrl ? primary.baseBinUrl : null),
);

export {
  selectWorks,
  selectBinBaseUrl,
};
