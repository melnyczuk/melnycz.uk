import React, { FC } from 'react';
import Link from 'next/link';

import Label from './Label';
import Picture from '../Picture';

import { ImageType } from '../../types';

import './Punctum.scss';

interface Props {
  href: string;
  image: ImageType;
  title: string;
}

const Punctum: FC<Props> = ({ href, image, title }) =>
  !image ? null : (
    <section className="punctum">
      <Link href={href} as={href}>
        <button type="button" className="punctum__button">
          <Picture image={image} parent="punctum" />
          <Label>{title}</Label>
        </button>
      </Link>
    </section>
  );

export default Punctum;
