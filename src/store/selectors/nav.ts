import { createSelector } from 'reselect';
import selectRoot from './root';

const selectActive = createSelector(
  [selectRoot.nav],
  ({ active }): string =>
    active,
);

const selectLinks = createSelector(
  [selectRoot.nav],
  ({ labels }): string[] =>
    labels,
);

const selectSiteTitle = createSelector(
  [selectRoot.nav],
  ({ sitetitle }): string =>
    sitetitle,
);

export default {
  active: selectActive,
  labels: selectLinks,
  title: selectSiteTitle,
};
