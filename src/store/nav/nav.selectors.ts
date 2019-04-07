import { StoreType, NavType } from "../../types";
import { createSelector } from "reselect";
import { selectActive } from "../active/active.selectors";

const selectMainNavArray = (state: StoreType): NavType[] => state.nav;

const selectActiveNav = createSelector(
  [selectMainNavArray, selectActive],
  (navArray: NavType[], active: string): NavType => {

    const activeNavArray = active && navArray.filter(
      (n: NavType): Boolean => {
        console.log('n', n);
        return n.label.toLowerCase() === active.toLowerCase()
  }
    );

    return activeNavArray && activeNavArray[0] || null;
  }
);

const selectSubNavArray = createSelector(
  [selectActiveNav],
  (activeNav: NavType): NavType[] => activeNav && activeNav.subnav || null
);

export {
  selectMainNavArray,
  selectSubNavArray,
}
