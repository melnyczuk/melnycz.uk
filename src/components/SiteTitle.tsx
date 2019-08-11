import Link from 'next/link';
import '../styles/SiteTitle.scss';

export interface Props { title: string }

export default ({ title }: Props) =>
  (
    <Link href='/'>
      <button className='site-title'>
        <h1 className='site-title'>
          {title}
        </h1>
      </button>
    </Link>
  );
