import React from 'react';

import Button from '../button/Button';

import { Container, Description } from "../../store/store.d";

interface PostProps extends Description {
  namespace: string;
  title: string;
  className?: string;
  children?: Array<Container | JSX.Element>;
  expand: () => void;
}

const Post = (
  {
    title,
    short,
    long,
    expand,
    expanded,
    className,
    children,
  }: PostProps,
): JSX.Element => (
  <article className={className}>
    {title && <h2 key="title">{title}</h2>}
    {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
    {long && <Button purpose='' onClick={expand} />}
    {expanded && <p>{long}</p>}
    {children}
  </article>
);

export {
  Post,
  PostProps
};
