import * as React from 'react';

import { Button } from '../Button';

import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

interface PortalVals {
  className: string;
  images: ImageType[];
}

interface PortalFuncs {
  scrollPortal?: Function;
}

interface PortalProps extends PortalVals, PortalFuncs {
  namespace: string;
}

const Portal = (
  {
    images,
    scrollPortal,
    className,
  }: PortalProps,
): JSX.Element => (
  <figure className={className}>
    <Button purpose="scroll-left" onClick={scrollPortal('<-')} />
    {
      images && images.map((image: ImageType) => {
        const { id, index, alt } = image;
        return <img key={`${id}-${index}`} src={buildSrc(image)} alt={alt} />;
      })
    }
    <Button purpose="scroll-right" onClick={scrollPortal('->')} />
  </figure>
);

export {
  Portal,
  PortalProps,
  PortalVals,
  PortalFuncs,
}
