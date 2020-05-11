import React, { useState } from 'react';
import App from '../src/components/App';
import Picture from '../src/components/Picture';
import { media } from '../static/db/media.json';
import { ImageType } from '../src/types';

const { images, baseUrl } = media;

const getRandomImageIndexGenerator = (len: number) => (): number =>
  Math.floor(Math.random() * len);

// eslint-disable-next-line react/display-name
export default (): JSX.Element => {
  const rI = getRandomImageIndexGenerator(images.length);

  const [index, setIndex] = useState<number>(rI());

  // eslint-disable-next-line no-undef
  const interval = setInterval(() => {
    setIndex(rI());
    clearInterval(interval);
  }, 3000);

  const image: ImageType = { ...images[index], baseUrl, type: 'images' };

  return (
    <App page="home">
      <Picture image={image} parent="home" />
    </App>
  );
};

export { getRandomImageIndexGenerator };
