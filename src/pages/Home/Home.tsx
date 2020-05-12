import React, { FC, useState } from 'react';

import { media as mediaDb } from '../../../static/db/media.json';

import { imageTypeCompletionFunc } from '../../utils';

import App from '../../components/App';
import Picture from '../../components/Picture';

const { images } = mediaDb;

const randImgIndex = (len: number): number => Math.floor(Math.random() * len);

const Home: FC = (): JSX.Element => {
  const [index, setIndex] = useState<number>(randImgIndex(images.length));

  // eslint-disable-next-line no-undef
  const interval = setInterval(() => {
    setIndex(randImgIndex(images.length));
    // eslint-disable-next-line no-undef
    clearInterval(interval);
  }, 3000);

  return (
    <App page="home">
      <Picture image={imageTypeCompletionFunc(images[index])} parent="home" />
    </App>
  );
};

export default Home;
