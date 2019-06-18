import * as React from 'react';

import { Button } from '../Button';

import { ImageType } from '../../types';
import Picture from '../Picture';
import { basename } from 'path';

interface PortalVals {
  className: string;
  baseUrl: string;
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
    baseUrl,
    scrollPortal,
    className,
  }: PortalProps,
): JSX.Element => (
  <figure className={className}>
    <Button purpose="scroll-left" onClick={scrollPortal('<-')} />
    {
      images && images.map((image: ImageType) => {
        const { namespace, index } = image;
        return (<Picture
          key={`${namespace}-${index}`}
          image={image}
          baseUrl={baseUrl}
          className={""}
        />);
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
