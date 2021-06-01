import 'modern-css-reset';
import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Navigation } from '../components';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => (
  <>
    <Navigation path={props.path} />
    {element}
  </>
);
