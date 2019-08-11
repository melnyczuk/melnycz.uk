import { useState } from 'react';
import App from '../src/components/App';
import Picture from '../src/components/Picture';
import { media } from '../static/db/media.json';
import { ImageType } from '../src/types';
import '../src/styles/App.scss';

const { images, baseUrl } = media;

const randomImageIndex = () => Math.floor(Math.random() * images.length);

export default () => {
  const [i, setI] = useState(randomImageIndex)
  setInterval(() => setI(randomImageIndex), 3000)
  const image: ImageType = { ...images[i], baseUrl, type: 'images' };

  return (
    <App page='home'>
      <Picture image={image} parent='home' max={640} />
    </App>
  );
};
