import { connect } from 'react-redux';

import {
  NavBarProps,
  NavBar, 
  NavBarVals,
  NavBarFuncs, 
} from '../components/Nav';

import {
  StoreType, NavButtonType,
} from '../store/types';

import {
  selectLinksForMain,
} from '../store/nav/nav.selectors';

import { 
  SiteTitleProps, 
  SiteTitle 
} from '../components/SiteTitle';

import { selectTitle } from '../store/about/about.selectors';
import { setTitle } from '../store/about/about.actions';

const NavContainer = connect<NavBarVals, NavBarFuncs, any>
  (
    (state: StoreType): { links: Array<NavButtonType> } => ({ 
      links: selectLinksForMain(state)
    }),
    (dispatch: any, props: NavBarProps, ): NavBarProps => ({ ...props })
  )(NavBar);

  export default connect<NavButtonProps, NavButtonProps, any>
  (
    (state: StoreType, props: NavButtonProps): NavButtonProps => (
      {
        ...props,
        label: props.label,
      }
    ),
    (
      (dispatch: any, props: any): NavButtonProps => (
        {
          ...props,
          updateTitle: (title: string): any => dispatch(setTitle(title))
        }
      )
    )
  )
  (NavButton);


const SiteTitleContainer = connect<SiteTitleProps, SiteTitleProps, any>
  (
    (state: StoreType): SiteTitleProps => ({ title: selectTitle(state) }),
    (dispatch: any, props: SiteTitleProps, ): SiteTitleProps => ({ ...props })
  )(SiteTitle);

export {
  NavContainer,
  SiteTitleContainer,
}
