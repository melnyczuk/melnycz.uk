import * as React from 'react';

import { Button } from '../Button';

import { ImageType } from '../../store/types';

interface PortalProps {
  namespace: string;
  baseBinUrl: string;
  images: Array<ImageType>;
  scrollPortal: Function;
  className?: string;
}

const Portal = (
  {
    baseBinUrl,
    images,
    scrollPortal,
    className,
  }: PortalProps,
): JSX.Element => (
  <figure className={className}>
    <Button purpose="scroll-left" onClick={scrollPortal('<-')} />
    {
      images && images.map((image: ImageType) => {
        const {
          id, path, ext, title,
        } = image;
        const src = `${baseBinUrl}/${path}/${id}.${ext}`;
        return <img key={id} src={src} alt={title} />;
      })
    }
    <Button purpose="scroll-right" onClick={scrollPortal('->')} />
  </figure>
);

export {
  Portal,
  PortalProps,
}
