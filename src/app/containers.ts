import { connect } from 'react-redux';

import {
  NavBar, NavBarProps
} from '../components/Nav';

import {
  StoreType,
} from '../store/types';

import {
  selectLinksForMain,
} from '../store/nav/nav.selectors';

import { SiteTitleProps, SiteTitle } from '../components/SiteTitle';

import { selectTitle } from '../store/about/about.selectors';

const NavContainer = connect<NavBarProps, NavBarProps, any>
  (
    (state: StoreType): NavBarProps => (
      {
        links: selectLinksForMain(state),
      }
    ),
  )(NavBar);

const SiteTitleContainer = connect<SiteTitleProps, SiteTitleProps, any>
  (
    (state: StoreType): SiteTitleProps => (
      {
        title: selectTitle(state),
      }
    ),
  )(SiteTitle);

export {
  NavContainer,
  SiteTitleContainer,
}
