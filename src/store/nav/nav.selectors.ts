import { StoreType, NavType } from "../types";
import { createSelector } from "reselect";
import { selectTitle } from "../about/about.selectors";

const selectStoreNavArray = (state: StoreType): NavType[] => state.nav;

const selectMainNavLabels = createSelector(
  [selectStoreNavArray],
  navArray => navArray.map(nav => nav.title)
);

const selectActiveNav = createSelector(
  [selectStoreNavArray, selectTitle],
  (navArray: NavType[], title: string): NavType => navArray.filter(
      (n: NavType): Boolean => (n.title.toLowerCase() === title.toLowerCase())
    )[0] || null
);

const selectSubNavLabels = createSelector(
  [selectActiveNav],
  (activeNav: NavType): string[] => activeNav && activeNav.labels || null
);

export {
  selectMainNavLabels,
  selectSubNavLabels,
}
