import React from 'react';

import { ImageType } from '../../types';
import { Button } from '../Button';
import { Picture } from '../Picture';

interface PortalVals {
  images: ImageType[];
}

interface PortalFuncs {
  scroll?: Function;
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

export { Portal, PortalProps, PortalVals, PortalFuncs }
