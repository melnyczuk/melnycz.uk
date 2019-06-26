import { connect } from 'react-redux';

import {
  Area, AreaProps, AreaVals, AreaFuncs,
} from './Area';
import {
  Home, HomeProps, HomeVals, HomeFuncs,
} from './Home';
import {
  NavBar, NavBarProps, NavBarVals, NavBarFuncs,
} from './components/Nav';
import {
  SiteTitle, SiteTitleProps, SiteTitleVals, SiteTitleFuncs,
} from './components/SiteTitle';

import { StoreType } from './types';

import { setActive } from './store/actions';
import selectArea from './store/selectors/area';
import selectHome from './store/selectors/home';
import selectNav from './store/selectors/nav';


const AreaContainer = connect<AreaVals, AreaFuncs, {}>(
  (state: StoreType, props: AreaProps) => ({
    works: selectArea.works(state, props),
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active)),
  }),
)(Area);

const HomeContainer = connect<HomeVals, HomeFuncs, {}>(
  (state: StoreType, props: HomeProps) => ({
    image: selectHome.image(state, props),
  }),
  (dispatch: Function, props: AreaProps) => ({}),
)(Home);

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
  (dispatch: Function, props: SiteTitleProps) => ({}),
)(SiteTitle);


export { AreaContainer, HomeContainer, NavContainer, SiteTitleContainer };
