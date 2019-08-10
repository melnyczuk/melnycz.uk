import Layout from '../components/Layout';
import Picture from '../components/Picture';

import { media } from '../db/media.json';
import { ImageType } from '../types';

const { images, baseUrl } = media;

export default () => {
  const image: ImageType = {
    ...images[Math.floor(Math.random() * images.length)],
    baseUrl,
    type: 'images',
  }

  return (
    <Layout page='home'>
      <Picture image={image} parent='home' max={640} />
    </Layout>
  );
}
