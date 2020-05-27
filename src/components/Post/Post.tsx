import React, { FC } from 'react';
import { Image, Work } from '../../models';

import Description from './Description';
import PageTitle from '../PageTitle';
import Picture from '../Picture';

import './Post.scss';

const keyFrom = ({ index, alt, type }: Image): string =>
  `${type}-${alt}-${index}`;

interface PostProps {
  path: string;
  work: Work;
}

const Post: FC<PostProps> = ({ path, work }) => (
  <article className="post">
    <PageTitle>{work.title}</PageTitle>
    <Description path={path} />
    {work?.media?.images?.map((image) => (
      <Picture key={keyFrom(image)} path={path} image={image} parent="post" />
    ))}
  </article>
);

export default Post;
