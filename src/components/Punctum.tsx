import React, { FC } from 'react';
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
  <div className="punctum--label">
    <h2 className="punctum--title">{title}</h2>
  </div>
);

const Punctum: FC<Props> = ({ area, image, title, namespace }) =>
  !image ? null : (
    <section className="punctum">
      <Link href="/[area]/[namespace]" as={`/${area}/${namespace}`}>
        <button type="button" className="punctum--button">
          <Picture image={image} parent="punctum" />
          <Label title={title} />
        </button>
      </Link>
    </section>
  );

export default Punctum;
export { Label };
