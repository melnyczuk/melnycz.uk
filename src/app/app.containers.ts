import { connect } from 'react-redux';

import {
  NavBarProps,
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
import { setTitle } from '../store/about/about.actions';

const MainNavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType) => ({
      className: '',
      labels: selectMainNavLabels(state)
    }),
    (dispatch: Function) => ({
      // updateTitle: (title) => dispatch(setTitle(title)),
    })
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType) => ({
      className: '',
      title: selectTitle(state),
    }),
    (dispatch: Function) => ({
      handleClick: () => dispatch()
    })
  )
  (SiteTitle);

export {
  MainNavContainer,
  SiteTitleContainer,
}
