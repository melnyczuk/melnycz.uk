import * as React from 'react';

import { ImageType } from '../../types';
import { Button } from '../Button';
import Picture from '../Picture';

interface PortalVals {
  baseUrl: string;
  images: ImageType[];
}

interface PortalFuncs {
  scrollPortal?: Function;
}

interface PortalProps extends PortalVals, PortalFuncs {
  namespace: string;
}

const Portal: React.FunctionComponent<PortalProps> =
  ({ images, baseUrl, scrollPortal }) => (
    <figure className='portal'>
      <Button parent='portal' purpose="scroll-left"
        onClick={scrollPortal('<-')} />
      {
        images && images.map((image: ImageType) => (
          <Picture
            key={`${image.namespace}-${image.index}`}
            image={image}
            baseUrl={baseUrl}
            parent='portal'
          />
        ))
      }
      <Button parent='portal' purpose="scroll-right"
        onClick={scrollPortal('->')} />
    </figure>
  );

export { Portal, PortalProps, PortalVals, PortalFuncs }
