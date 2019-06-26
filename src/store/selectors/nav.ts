import { createSelector } from "reselect";
import selectRoot from "./root";

const selectActive = createSelector(
  [selectRoot.nav],
  ({ active }) =>
    active
);

const selectLinks = createSelector(
  [selectRoot.nav],
  ({ labels }) =>
    labels
)

const selectSiteTitle = createSelector(
  [selectRoot.nav],
  ({ sitetitle }): string =>
    sitetitle
);

export default {
  active: selectActive,
  labels: selectLinks,
  title: selectSiteTitle,
}
