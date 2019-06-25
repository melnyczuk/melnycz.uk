import { connect } from 'react-redux';
import { NavBar, NavBarVals, NavBarFuncs, NavBarProps } from './components/Nav';
import { SiteTitleVals, SiteTitleFuncs, SiteTitle, SiteTitleProps } from './components/SiteTitle';
import { StoreType } from './types';
import { selectActive } from './store/active/selectors';
import { selectNavArray } from './store/nav/selectors';
import { selectSiteTitle } from './store/works/selectors';

const NavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType, props: NavBarProps) => ({
      active: selectActive(state, props),
      labels: selectNavArray(state, props),
    }),
    (dispatch: Function, props: NavBarProps) => ({})
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType, props: SiteTitleProps) => ({
      className: 'site-title',
      title: selectSiteTitle(state),
    }),
    (dispatch: Function, props: SiteTitleProps) => ({})
  )
  (SiteTitle);

export {
  NavContainer,
  SiteTitleContainer,
}
