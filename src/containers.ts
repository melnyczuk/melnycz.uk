import { connect } from 'react-redux';

import {
  Area, AreaProps, AreaVals, AreaFuncs,
} from './Area';
import {
  NavBar, NavBarProps, NavBarVals, NavBarFuncs,
} from './components/Nav';
import {
  SiteTitle, SiteTitleProps, SiteTitleVals, SiteTitleFuncs,
} from './components/SiteTitle';

import { StoreType } from './types';

import { setActive } from './store/actions';
import selectNav from './store/selectors/nav';
import selectArea from './store/selectors/area';


const NavContainer = connect<NavBarVals, NavBarFuncs, {}>(
  (state: StoreType, props: NavBarProps) => ({
    active: selectNav.active(state, props),
    labels: selectNav.labels(state, props),
  }),
  (dispatch: Function, props: NavBarProps) => ({}),
)(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>(
  (state: StoreType, props: SiteTitleProps) => ({
    title: selectNav.title(state, props),
  }),
  (dispatch: Function, props: SiteTitleProps) => ({
    handleClick: active => dispatch(setActive(active)),
  }),
)(SiteTitle);

const AreaContainer = connect<AreaVals, AreaFuncs, {}>(
  (state: StoreType, props: AreaProps) => ({
    works: selectArea.works(state, props),
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active)),
  }),
)(Area);


export { AreaContainer, NavContainer, SiteTitleContainer };
