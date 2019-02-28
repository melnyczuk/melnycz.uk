import { connect } from 'react-redux';

import {
  NavBar,
  NavBarVals,
  NavBarFuncs,
  NavBarProps,
} from '../components/Nav';

import {
  StoreType,
} from '../store/types';

import {
  selectMainNavLabels,
} from '../store/nav/nav.selectors';

import {
  SiteTitleVals,
  SiteTitleFuncs,
  SiteTitle,
  SiteTitleProps
} from '../components/SiteTitle';

import { selectTitle } from '../store/about/about.selectors';

const MainNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType, props: NavBarProps) => ({
      className: '',
      buttonClassName: '',
      labels: selectMainNavLabels(state),
      title: '',
    }),
    (dispatch: Function, props: NavBarProps) => ({})
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType, props: SiteTitleProps) => ({
      className: '',
      title: selectTitle(state),
    }),
    (dispatch: Function, props: SiteTitleProps) => ({})
  )
  (SiteTitle);

export {
  MainNavContainer,
  SiteTitleContainer,
}
