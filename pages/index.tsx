import { useState } from 'react';
import App from '../src/components/App';
import Picture from '../src/components/Picture';
import { media } from '../static/db/media.json';
import { ImageType } from '../src/types';
import '../src/styles/App.scss';

const { images, baseUrl } = media;

const getRandomImageIndexGenerator =
  (len) =>
    () =>
      Math.floor(Math.random() * len);

export default () => {
  const generateRandomImageIndex = getRandomImageIndexGenerator(images.length);
  const [i, setI] = useState(generateRandomImageIndex());
  setInterval(() => setI(generateRandomImageIndex), 3000);
  const image: ImageType = { ...images[i], baseUrl, type: 'images' };

  return (
    <App page='home'>
      <Picture image={image} parent='home' max={640} />
    </App>
  );
};

export { getRandomImageIndexGenerator };
