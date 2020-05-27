import React, { FC } from 'react';
import Link from 'next/link';

import Label from './Label';
import Picture from '../Picture';

import { Work } from '../../models';
import { findPunctumImage } from '../../utils';

import './Punctum.scss';

interface Props {
  href: string;
  path: string;
  work: Work;
}

const Punctum: FC<Props> = ({ href, path, work }) => (
  <section className="punctum">
    <Link href={href} as={href}>
      <button type="button" className="punctum__button">
        <Picture path={path} image={findPunctumImage(work)} parent="punctum" />
        <Label>{work.title}</Label>
      </button>
    </Link>
  </section>
);

export default Punctum;
