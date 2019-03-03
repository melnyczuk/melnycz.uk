import { connect } from 'react-redux';

import {
  NavBar,
  NavBarVals,
  NavBarFuncs,
  NavBarProps,
} from './components/Nav';

import {
  StoreType,
} from './types';

import { 
  selectMainNavArray,
} from './store/nav/nav.selectors';

import {
  SiteTitleVals,
  SiteTitleFuncs,
  SiteTitle,
  SiteTitleProps
} from './components/SiteTitle';

import { selectTitle } from './store/about/about.selectors';
import { selectActive } from './store/active/active.selectors';

const MainNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType, props: NavBarProps) => ({
      active: selectActive(state),
      title: '',
      items: selectMainNavArray(state),
      className: 'main-nav',
    }),
    (dispatch: Function, props: NavBarProps) => ({})
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType, props: SiteTitleProps) => ({
      className: 'site-title',
      title: selectTitle(state),
    }),
    (dispatch: Function, props: SiteTitleProps) => ({})
  )
  (SiteTitle);

export {
  MainNavContainer,
  SiteTitleContainer,
}
