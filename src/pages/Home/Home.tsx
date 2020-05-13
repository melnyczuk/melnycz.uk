import React, { FC, useState } from 'react';
import { media as mediaDb } from '../../../static/db/media.json';
import { imageTypeCompletionFunc } from '../../utils';
import Picture from '../../components/Picture';
import './Home.scss';

const randImgIndex = (): number => Math.floor(Math.random() * mediaDb.images.length);

const Home: FC = (): JSX.Element => {
  const [index, setIndex] = useState<number>(randImgIndex());

  // eslint-disable-next-line no-undef
  const interval = setInterval(() => {
    setIndex(randImgIndex());
    // eslint-disable-next-line no-undef
    clearInterval(interval);
  }, 3000);

  return (
    <Picture parent="home" image={imageTypeCompletionFunc(mediaDb.images[index])} />
  );
};

export default Home;
