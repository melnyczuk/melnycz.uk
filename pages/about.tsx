import React, { FC } from 'react';

import App from '../src/components/App';
import Post from '../src/components/Post';

import { media as mediaDb } from '../static/db/media.json';
import { title, media } from '../static/db/about.json';

import {
  filterMediaByNamespace,
  addBaseUrlAndTypeToMediaItem,
} from '../src/utils';

import { ImageType } from '../src/types';

const { baseUrl, images } = mediaDb;

const imageTypeCompletionFunc = addBaseUrlAndTypeToMediaItem(baseUrl)('images');

const About: FC = () => {
  const namespaceImages = images
    .map(imageTypeCompletionFunc)
    .filter(filterMediaByNamespace('aboutbio'));

  const heroImage: ImageType =
    media.punctum &&
    media.punctum.map(
      (p) => namespaceImages.filter(({ index }) => index === p)[0]
    )[0];

  return (
    <App page="about">
      <Post namespace="aboutbio" title={title} images={[heroImage]} />
    </App>
  );
};

export default About;
