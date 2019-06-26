import { connect } from 'react-redux';
import { NavBar, NavBarVals, NavBarFuncs, NavBarProps } from './components/Nav';
import { SiteTitleVals, SiteTitleFuncs, SiteTitle, SiteTitleProps } from './components/SiteTitle';
import { Area, AreaVals, AreaFuncs, AreaProps } from './Area';
import { StoreType } from './types';
import selectNav from './store/selectors/nav';
import selectArea from './store/selectors/area';
import { setActive } from './store/actions';


const NavContainer = connect<NavBarVals, NavBarFuncs, {}>
  (
    (state: StoreType, props: NavBarProps) => ({
      active: selectNav.active(state, props),
      labels: selectNav.labels(state, props),
    }),
    (dispatch: Function, props: NavBarProps) => ({})
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleVals, SiteTitleFuncs, {}>
  (
    (state: StoreType, props: SiteTitleProps) => ({
      title: selectNav.title(state, props),
    }),
    (dispatch: Function, props: SiteTitleProps) => ({})
  )
  (SiteTitle);

const AreaContainer = connect<AreaVals, AreaFuncs, {}>
  (
    (state: StoreType, props: AreaProps) => ({
      works: selectArea.works(state, props),
    }),
    (dispatch: Function, props: AreaProps) => ({
      updateActive: (active: string) => dispatch(setActive(active))
    }),
  )(Area);

  export { AreaContainer };

export {
  NavContainer,
  SiteTitleContainer,
}
