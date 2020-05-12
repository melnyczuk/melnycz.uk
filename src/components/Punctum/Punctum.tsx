import React, { FC } from 'react';
import Link from 'next/link';

import Label from './Label';
import Picture from '../Picture';

import { ImageType } from '../../types';

import './Punctum.scss';

interface Props {
  area: string;
  image: ImageType;
  namespace: string;
  title: string;
}

const Punctum: FC<Props> = ({ area, image, title, namespace }) =>
  !image ? null : (
    <section className="punctum">
      <Link href="/[area]/[namespace]" as={`/${area}/${namespace}`}>
        <button type="button" className="punctum__button">
          <Picture image={image} parent="punctum" />
          <Label title={title} />
        </button>
      </Link>
    </section>
  );

export default Punctum;
