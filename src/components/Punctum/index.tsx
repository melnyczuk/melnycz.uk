import * as React from 'react';

import './Punctum.scss';
import { ImageType } from '../../types';
import Picture from '../Picture';
import Label from '../Label';

interface PunctumVals {
  className: string;
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
  ({ className, image, baseUrl, title, show: showModal }) =>
    image && (
      <div className="punctum" onClick={showModal}>
        <Picture image={image} baseUrl={baseUrl} className={className} />
        {title && <Label title={title} type="punctum" />}
      </div>
    );

export { Punctum, PunctumProps, PunctumVals, PunctumFuncs }
