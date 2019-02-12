import { connect } from 'react-redux';

import {
  NavBar
} from '../components/Nav';

import {
  StoreType, NavType
} from '../store/types';

import {
  selectTitle,
  selectLinks,
} from '../store/nav/nav.selectors';

const mapStateToProps = (
  state: StoreType,
  props: NavType
): NavType => ({
  ...props,
  title: selectTitle(state),
  links: selectLinks(state),
});

export default connect<NavType, NavType, any>
  (mapStateToProps)
  (NavBar);
