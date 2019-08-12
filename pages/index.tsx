import { useState } from 'react';
import App from '../src/components/App';
import Picture from '../src/components/Picture';
import { media } from '../static/db/media.json';
import { ImageType } from '../src/types';
import '../src/styles/App.scss';

const { images, baseUrl } = media;

const getRandomImageIndexGenerator =
  (len: number) =>
    (): number =>
      Math.floor(Math.random() * len);

export default (): JSX.Element => {
  const generateRandomImageIndex = getRandomImageIndexGenerator(images.length);

  const [index, setIndex]:
  [number, (i: number) => void]
    = useState(generateRandomImageIndex());

  const interval = setInterval(() => {
    setIndex(generateRandomImageIndex());
    clearInterval(interval);
  }, 3000);

  const image: ImageType = { ...images[index], baseUrl, type: 'images' };

  return (
    <App page='home'>
      <Picture image={image} parent='home' />
    </App>
  );
};

export { getRandomImageIndexGenerator };
