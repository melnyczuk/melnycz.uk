import * as React from 'react';

interface SiteTitleProps {
  title: string;
}

const SiteTitle = ({ title }: SiteTitleProps): JSX.Element => (
  <h1>{title}</h1>
)

export {
  SiteTitle,
  SiteTitleProps,
}
