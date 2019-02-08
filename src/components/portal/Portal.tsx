import React from 'react';

import Button from '../button/Button';

import { Image } from '../../store/store.d';

export interface PortalProps {
  namespace: string;
  baseBinUrl: string;
  images: Array<Image>;
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
      images && images.map((image: Image) => {
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

export default Portal;
