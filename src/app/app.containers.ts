import { connect } from 'react-redux';

import {
  NavBar,
  NavBarVals,
  NavBarFuncs,
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
  SiteTitle
} from '../components/SiteTitle';

import { selectTitle } from '../store/about/about.selectors';

const MainNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType) => ({
      className: '',
      buttonClassName: '',
      labels: selectMainNavLabels(state),
      title: '',
    }),
    (dispatch: Function) => ({})
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType) => ({
      className: '',
      title: selectTitle(state),
    }),
    (dispatch: Function) => ({})
  )
  (SiteTitle);

export {
  MainNavContainer,
  SiteTitleContainer,
}
