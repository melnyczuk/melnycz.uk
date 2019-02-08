import { createSelector } from 'reselect';

import { selectPrimaryArea } from '../areas.selectors';

import { Primary, Works } from '../../store.d';

const selectWorks = createSelector(
  selectPrimaryArea,
  (primary: Primary | null): Works => (
    primary.works ? primary.works : null
  ),
);

const selectBinBaseUrl = createSelector(
  selectPrimaryArea,
  (primary: Primary | null): string => (
    primary.baseBinUrl ? primary.baseBinUrl : null
  ),
);

export {
  selectWorks,
  selectBinBaseUrl,
};
