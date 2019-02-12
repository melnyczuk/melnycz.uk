import { StoreType, NavLinks, AreaType, NavType } from "../types";
import { createSelector } from "reselect";

function selectNav(state: StoreType | AreaType): NavType {
  return state.nav
};

const selectTitle = createSelector(
  [selectNav],
  (nav: NavType): string => nav.title
);

const selectLinks = createSelector(
  [selectNav],
  (nav: NavType): NavLinks => nav.links
);

export {
  selectLinks,
  selectTitle,
}

