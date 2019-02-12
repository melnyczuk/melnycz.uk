import { connect } from 'react-redux';

import {
  NavBar,
  NavBarProps
} from '../components/Nav';

import {
  StoreType
} from '../store/types';

import {
  selectTitle,
  selectLinks,
} from '../store/nav/nav.selectors';

const mapStateToProps = (
  state: StoreType,
  props: NavBarProps
): NavBarProps => ({
  ...props,
  title: selectTitle(state),
  links: selectLinks(state),
});

export default connect<NavBarProps, NavBarProps, any>
  (mapStateToProps)
  (NavBar);
