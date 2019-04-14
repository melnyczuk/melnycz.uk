import { StoreType, NavType } from "../../types";
import { createSelector } from "reselect";
import { selectActive } from "../active/selectors";

const selectMainNavArray = ({ nav }: StoreType): NavType[] => nav;

const selectActiveNav = createSelector(
  [selectMainNavArray, selectActive],
  (navArray: NavType[], active: string): NavType => {

    const activeNavArray = active && navArray.filter(
      (n: NavType): Boolean => {
        return n && n.label && n.label.toLowerCase() === active.toLowerCase()
  }
    );

    return activeNavArray && activeNavArray[0] || null;
  }
);

const selectSubNavArray = createSelector(
  [selectActiveNav],
  (nav: NavType): NavType[] => nav && nav.subnav || null
);

export {
  selectMainNavArray,
  selectSubNavArray,
}
