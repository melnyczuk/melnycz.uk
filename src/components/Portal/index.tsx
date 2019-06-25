import * as React from 'react';

import { ImageType } from '../../types';
import { Button } from '../Button';
import Picture from '../Picture';

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

const Portal: React.FunctionComponent<PortalProps> =
  ({ images, baseUrl, scrollPortal, className }) => (
    <figure className={className}>
      <Button purpose="scroll-left" onClick={scrollPortal('<-')} />
      {
        images && images.map((image: ImageType) => {
          const { namespace, index } = image;
          return (
            <Picture
              key={`${namespace}-${index}`}
              image={image}
              baseUrl={baseUrl}
              className={""}
            />
          );
        })
      }
      <Button purpose="scroll-right" onClick={scrollPortal('->')} />
    </figure>
  );

export { Portal, PortalProps, PortalVals, PortalFuncs }
