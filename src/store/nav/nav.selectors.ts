import { StoreType, NavType } from "../types";
import { createSelector } from "reselect";

import { selectTitle } from '../about/about.selectors';

function buildDefaultNav(navs: Array<NavType>): NavType {
  return { title: 'hey', links: navs }
}

function selectNavArray(state: StoreType | Array<NavType>): Array<NavType> {
  return (<StoreType>state).hasOwnProperty('nav') ?
    (<StoreType>state).nav :
    (<Array<NavType>>state)
};

const selectActiveNav = createSelector(
  [selectNavArray, selectTitle],
  (navs: Array<NavType>, title: string): NavType => navs.filter(
    (n: NavType): Boolean => n.title.toLowerCase() === title.toLowerCase()
  )[0] || buildDefaultNav(navs)
);

const selectLinksForMain = createSelector(
  selectNavArray,
  navs => reduceLinks(buildDefaultNav(navs))
)

const selectLinksForActive = createSelector(
  [selectActiveNav],
  (active: NavType): Array<string> => reduceLinks(active)
)

const reduceLinks = (nav: NavType): Array<string> =>
  nav.links.map(
    (item: NavType | string): string =>
      (<NavType>item).hasOwnProperty('title') ?
        (<NavType>item).title :
        <string>item
  )

export {
  selectActiveNav,
  selectLinksForActive,
  selectLinksForMain,
  selectNavArray,
  reduceLinks,
}
