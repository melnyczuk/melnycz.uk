import Layout from '../src/components/Layout';
import Picture from '../src/components/Picture';
import { media } from '../static/db/media.json';
import { ImageType } from '../src/types';

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
