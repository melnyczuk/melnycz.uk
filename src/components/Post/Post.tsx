import React, { FC } from 'react';

import { media as mediaDb } from '../../../static/db/media.json';

import { ImageType } from '../../types';

import {
  filterMediaByNamespace,
  imageTypeCompletionFunc,
} from '../../../src/utils';

import Description from './Description';
import PageTitle from '../PageTitle';
import Picture from '../Picture';

import './Post.scss';

const keyFrom = ({ namespace, index }: ImageType): string =>
  `${namespace}-${index}`;

interface PostProps {
  namespace: string;
  title: string;
  imgs: number[];
}

const Post: FC<PostProps> = ({ namespace, title, imgs }) => {
  const images = imgs.map((i) =>
    mediaDb.images
      .map(imageTypeCompletionFunc)
      .filter(filterMediaByNamespace(namespace))
      .find(({ index }) => index === i)
  );

  return (
    <article className="post">
      <PageTitle>{title}</PageTitle>
      <Description namespace={namespace} />
      {images?.map((image) => (
        <Picture key={keyFrom(image)} image={image} parent="post" />
      ))}
    </article>
  );
};

export default Post;
