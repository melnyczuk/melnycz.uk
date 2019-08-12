import Link from 'next/link';
import '../styles/SiteTitle.scss';

export interface Props { title: string }

export default ({ title }: Props) =>
  (
    <Link href='/'>
      <button type='button' className='site-title site-title--button'>
        <h1 className='site-title site-title--heading'>
          {title}
        </h1>
      </button>
    </Link>
  );
