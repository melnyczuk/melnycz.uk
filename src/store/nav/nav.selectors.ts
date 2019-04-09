import { StoreType, NavType } from "../../types";
import { createSelector } from "reselect";
import { selectActive } from "../active/active.selectors";

const selectMainNavArray = (state: StoreType): NavType[] => state.nav;

const selectActiveNav = createSelector(
  [selectMainNavArray, selectActive],
  (navArray: NavType[], active: string): NavType => {

    const activeNavArray = active && navArray.filter(
      ({ label }: NavType): Boolean => label.toLowerCase() === active.toLowerCase()
    );

    return activeNavArray && activeNavArray[0] || null;
  }
);

const selectSubNavArray = createSelector(
  [selectActiveNav],
  ({ subnav = null }: NavType): NavType[] => subnav
);

export {
  selectMainNavArray,
  selectSubNavArray,
}
