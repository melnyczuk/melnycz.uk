import * as React from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StoreType } from '../../store/types';
import { setTitle } from '../../store/about/about.actions';

interface NavButtonProps {
  label: string;
  updateTitle: (title: string) => any;
}

const NavButton = (
  {
    label,
    updateTitle,
  }: NavButtonProps
): JSX.Element => {
  const id = String(label).toLowerCase().replace(' ', '-');
  return (
    <button className={'nav-button'} onClick={() => updateTitle(label)}>
      <NavLink to={`/${id}`} >
        {label}
      </NavLink>
    </button>
  );
}



export default connect<NavButtonProps, NavButtonProps, any>
  (
    (state: StoreType, props: NavButtonProps): NavButtonProps => (
      {
        ...props,
        label: props.label,
      }
    ),
    (
      (dispatch: any, props: any): any => (
        {
          updateTitle: (title: string): any => dispatch(setTitle(title))
        }
      )
    )
  )
  (NavButton);
