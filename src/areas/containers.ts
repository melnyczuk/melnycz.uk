import { connect } from "react-redux";

import About from "./About";
import Home from "./Home";
import Research from "./Research";
import Portfolio from "./Portfolio";

import {
  Area,
  AreaVals,
  AreaFuncs,
  AreaProps,
} from "./Area";

import {
  NavBar,
  NavBarVals,
  NavBarFuncs,
  NavBarProps,
} from "../components/Nav";

import { setActive } from "../store/active/actions";
import { selectActive } from "../store/active/selectors";
import { selectSubNavArray } from "../store/nav/selectors";

import { StoreType } from "../types";


const SubNavContainer = connect<NavBarVals, NavBarFuncs, {}>
(
  (state: StoreType, props: NavBarProps) => ({
    active: selectActive(state, props),
    title: 'portfolio',
    items: selectSubNavArray(state, props),
    className: 'sub-nav',
  }),
  (dispatch: Function, props: NavBarProps) => ({})
)(NavBar);

const AboutContainer = connect<AreaVals, AreaFuncs, {}>
(
  (state: StoreType, props: AreaProps) => ({
    area: 'about',
    title: 'About',
    component: About,
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active))
  }),
)(Area);

const HomeContainer = connect<AreaVals, AreaFuncs, {}>
(
  (state: StoreType, props: AreaProps) => ({
    area: '',
    title: 'Howard Melnyczuk',
    component: Home,
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(null)),
  })
)(Area);

const PortfolioContainer = connect<AreaVals, AreaFuncs, {}>
(
  (state: StoreType, props: AreaProps) => ({
    area: 'portfolio',
    title: 'Portfolio',
    component: Portfolio,
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active))
  })
)(Area);

const ResearchContainer = connect<AreaVals, AreaFuncs, {}>
(
  (state: StoreType, props: AreaProps) => ({
    area: 'research',
    title: 'Research',
    component: Research,
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active))
  })
)(Area);

export {
  AboutContainer,
  HomeContainer,
  PortfolioContainer,
  ResearchContainer,
  SubNavContainer,
}
