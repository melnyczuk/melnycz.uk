import * as React from 'react';
import { Link } from 'react-router-dom';

interface SiteTitleVals {
  className: string;
  title: string;
}

interface SiteTitleFuncs {}

interface SiteTitleProps extends SiteTitleVals, SiteTitleFuncs {}

const SiteTitle = ({ title, className }: SiteTitleProps) => (
  <Link to={'/'}>
    <h1 className={className}>{title}</h1>
  </Link>
)

export {
  SiteTitle,
  SiteTitleProps,
  SiteTitleVals,
  SiteTitleFuncs,
}
