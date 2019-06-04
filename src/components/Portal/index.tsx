import * as React from 'react';

import { Button } from '../Button';

import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

interface PortalVals {
  baseURL: string;
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
    baseURL,
    images,
    scrollPortal,
    className,
  }: PortalProps,
): JSX.Element => (
  <figure className={className}>
    <Button purpose="scroll-left" onClick={scrollPortal('<-')} />
    {
      images && images.map((image: ImageType) => {
        const { namespace, index, alt } = image;
        return <img key={`${namespace}-${index}`} src={buildSrc(baseURL, 'image')(image)} alt={alt} />;
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
