import Link from 'next/link';
import Picture from './Picture';
import { ImageType } from '../types';
import '../styles/Punctum.scss';

export interface Props {
  area: string;
  image: ImageType;
  namespace: string;
}

export default ({ area, image, namespace }: Props) => {
  if (!image) return null;

  return (
    <section className='punctum'>
      <Link href='/[area]/[namespace]' as={`/${area}/${namespace}`}>
        <button type='button' className='punctum--button'>
          <Picture image={image} parent='punctum' />
          {/* {title && <Label title={title} parent='punctum' />} */}
        </button>
      </Link>
    </section>
  );
};
