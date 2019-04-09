import { StoreType, NavType } from "../../types";
import { createSelector } from "reselect";
import { selectActive } from "../active/active.selectors";

const selectMainNavArray = ({ nav }: StoreType): NavType[] => nav;

const selectActiveNav = createSelector(
  [selectMainNavArray, selectActive],
  (navArray: NavType[], active: string): NavType => {

    const activeNavArray = active && navArray.filter(
      ({ label }: NavType): Boolean => label && label.toLowerCase() === active.toLowerCase()
    );

    return activeNavArray && activeNavArray[0] || null;
  }
);

const selectSubNavArray = createSelector(
  [selectActiveNav],
  ({ subnav = [] }: NavType): NavType[] => subnav
);

export {
  selectMainNavArray,
  selectSubNavArray,
}
