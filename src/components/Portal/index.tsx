import * as React from 'react';

import { Button } from '../Button';

import { ImageType } from '../../types';
import Picture from '../Picture';
import { basename } from 'path';

interface PortalVals {
  images: ImageType[];
}

interface PortalFuncs {
  scrollPortal?: Function;
}

interface PortalProps extends PortalVals, PortalFuncs {
  namespace: string;
}

const Portal: React.FunctionComponent<PortalProps> =
  ({ images, scroll }) => (
    <figure className='portal'>
      <Button parent='portal' purpose="scroll-left" onClick={scroll('<-')} />
      {
        images && images.map((image: ImageType) => (
          <Picture
            key={`${image.namespace}-${image.index}`}
            image={image}
            parent='portal'
          />
        ))
      }
      <Button parent='portal' purpose="scroll-right" onClick={scroll('->')} />
    </figure>
  );

export {
  Portal,
  PortalProps,
  PortalVals,
  PortalFuncs,
}
