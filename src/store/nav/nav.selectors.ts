import { StoreType, NavType } from "../types";
import { createSelector } from "reselect";

function selectNav(state: StoreType | NavType): NavType {
  return (<StoreType>state).hasOwnProperty('navs') ?
  (<StoreType>state).navs :
  <NavType>state
};

const selectTitle = createSelector(
  selectNav,
  (nav: NavType): string => nav.title
  }
);

const selectLinks = createSelector(
  selectNav,
  (nav: NavType): Array<string> => reduceLinks(nav)
);

const reduceLinks =
(nav: NavType): Array<string> => nav.links.map(
  (items: NavType | string): string => (<NavType>items).hasOwnProperty('title') ?
    (<NavType>items).title :
    <string>items
)

export {
  selectNav,
  selectLinks,
  selectTitle,
  reduceLinks,
}

