import Layout from '../components/Layout';
import Picture from '../components/Picture';

import { media } from '../db/media.json';
import { ImageType } from '../components/types';

const image: ImageType = 
  media.images[Math.floor(Math.random() * media.images.length)];

export default () => (
  <Layout page='home'>
    <Picture image={image} parent='home' max={640} />
  </Layout>
);
