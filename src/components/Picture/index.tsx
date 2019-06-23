import React from 'react';
import { ImageType } from '../../types';
import { buildSrcWithBaseUrl } from '../../utils';

interface PictureProps {
  image: ImageType;
  baseUrl: string;
  className: string;
}

const getSources = (image: ImageType, buildSrc: Function) =>
  image.sizes.map((size, i) => (
    <source
      key={`source-${i}`}
      srcSet={buildSrc(size)(image)}
      media={`(max-width: ${size * 0.8}px)`}
    />
  )
);

const Picture = ({image, baseUrl, className}: PictureProps) => {
  const buildSrc = buildSrcWithBaseUrl(baseUrl)('images');
  return (
    <picture>
      {getSources(image, buildSrc)}
      <img
        className={`${className}`}
        src={buildSrc(640)(image)}
        alt={image.alt}
      />
    </picture>
  );
}

export default Picture;
