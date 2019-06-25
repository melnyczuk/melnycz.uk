import { connect } from 'react-redux';
import { NavBar, NavBarVals, NavBarFuncs, NavBarProps } from './components/Nav';
import { SiteTitleVals, SiteTitleFuncs, SiteTitle, SiteTitleProps } from './components/SiteTitle';
import { Area, AreaVals, AreaFuncs, AreaProps } from './Area';
import { StoreType } from './types';
import { selectActive } from './store/active/selectors';
import { selectNavArray } from './store/nav/selectors';
import { selectSiteTitle, selectAreaWorks } from './store/works/selectors';
import { setActive } from './store/active/actions';


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

const AreaContainer = connect<AreaVals, AreaFuncs, {}>
  (
    (state: StoreType, props: AreaProps) => ({
      works: selectAreaWorks(state, props),
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
