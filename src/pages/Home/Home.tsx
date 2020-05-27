/* global clearInterval setInterval */
import React, { FC, useState } from 'react';

import { root, works } from '../../../static/info.json';
import { Work } from '../../models';
import { findPunctumImage, fetchData } from '../../utils';

import Loader from '../../components/Loader';
import Picture from '../../components/Picture';
import './Home.scss';

const paths = works.map((work) => `${root}/works/${work}`);

const randIndex = (len: number): number => Math.floor(Math.random() * len);

const Home: FC = () => {
  const [i, setIndex] = useState<number>(randIndex(paths.length));

  const images = paths.reduce(
    (acc, path) => ({
      ...acc,
      [path]: findPunctumImage(fetchData<Work>(`${path}/data.json`).value),
    }),
    {}
  );

  const interval = setInterval(() => {
    setIndex(randIndex(paths.length));
    clearInterval(interval);
  }, 3000);

  return (
    <Loader waitOn={[images]}>
      {images && (
        <Picture parent="home" path={paths[i]} image={images[paths[i]]} />
      )}
    </Loader>
  );
};

export default Home;
