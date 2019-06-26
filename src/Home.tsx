import React from 'react';

import { ImageType } from './types';
import { Picture } from './components/Picture';

interface HomeVals { image: ImageType }
interface HomeFuncs {}
interface HomeProps extends HomeVals, HomeFuncs {}

const Home: React.FunctionComponent<HomeProps> =
  ({ image }) => (
    <div className='home'>
      <Picture image={image} parent='home' max={640} />
    </div>
  );

export { Home, HomeProps, HomeVals, HomeFuncs };
