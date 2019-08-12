import Link from 'next/link';
import Picture from './Picture';
import { ImageType } from '../types';
import '../styles/Punctum.scss';

export interface Props {
  area: string;
  image: ImageType;
  namespace: string;
  title: string;
}

const Label = ({ title }: { title: string }): JSX.Element => (
  <div className='punctum--label'>
    <h2 className='punctum--title'>
      {title}
    </h2>
  </div>
);

export default ({ area, image, title, namespace }: Props) => {
  if (!image) return null;

  return (
    <section className='punctum'>
      <Link href='/[area]/[namespace]' as={`/${area}/${namespace}`}>
        <button type='button' className='punctum--button'>
          <Picture image={image} parent='punctum' />
          <Label title={title} />
        </button>
      </Link>
    </section>
  );
};

export { Label };
