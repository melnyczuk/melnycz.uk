import * as React from 'react';

import { Button } from '../Button';

import { ContainerType, DescriptionType } from "../../store/types";

interface PostProps extends DescriptionType {
  namespace: string;
  title: string;
  className?: string;
  children?: Array<ContainerType | JSX.Element>;
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
