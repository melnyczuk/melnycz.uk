import { connect } from 'react-redux';

import {
  NavBar,
  NavBarProps
} from '../../components/nav/NavBar';

import { 
  StoreType
} from '../../store/types';

import { 
  navSelectors
} from '../../store/areas/areas.selectors';

const mapStateToProps = (
  state: StoreType,
  props: NavBarProps
): NavBarProps => ({
  ...props,
  title: navSelectors.selectTitle(state),
  buttons: navSelectors.selectButtons(state),
});

export default connect<NavBarProps, NavBarProps, any>
  (mapStateToProps)
  (NavBar);
