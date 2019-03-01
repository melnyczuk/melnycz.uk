import { StoreType, NavType } from "../../types";
import { createSelector } from "reselect";
import { selectTitle } from "../about/about.selectors";

const selectStoreNavArray = (state: StoreType): NavType[] => state.nav;

const selectMainNavLabels = createSelector(
  [selectStoreNavArray],
  navArray => navArray.map(nav => nav.title)
);

const selectActiveNav = createSelector(
  [selectStoreNavArray, selectTitle],
  (navArray: NavType[], title: string): NavType => {
    
    const activeNavArray = navArray.filter(
      (n: NavType): Boolean => (n.title.toLowerCase() === title.toLowerCase())
    );
    
    return activeNavArray[0] || null
  }
);

const selectSubNavLabels = createSelector(
  [selectActiveNav],
  (activeNav: NavType): string[] => activeNav && activeNav.labels || null
);

const selectSubNavTitle = createSelector(
  [selectActiveNav],
  (activeNav: NavType): string => activeNav && activeNav.title || null
)

export {
  selectMainNavLabels,
  selectSubNavLabels,
  selectSubNavTitle,
}
