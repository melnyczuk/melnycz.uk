import React from 'react';

import './Punctum.scss';
import { ImageType } from '../../types';
import { Picture } from '../Picture';
import { Label } from '../Label';

interface PunctumVals {
  image: ImageType;
  baseUrl: string;
  title: string;
}

interface PunctumFuncs {
  show: () => void;
}

interface PunctumProps extends PunctumVals, PunctumFuncs {
  namespace: string;
}

const Punctum: React.FunctionComponent<PunctumProps> =
  ({ image, baseUrl, title, show: showModal }) =>
    image
    ? (
      <div className='punctum' onClick={showModal}>
        <Picture image={image} baseUrl={baseUrl} parent='punctum' />
        {title && <Label title={title} parent='punctum' />}
      </div>
    )
    : null;

export { Punctum, PunctumProps, PunctumVals, PunctumFuncs }
