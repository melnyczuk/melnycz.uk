import React, { FC } from 'react';
import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

import './Picture.scss';

interface PictureProps {
  image: ImageType;
  parent: string;
}

const Picture: FC<PictureProps> = ({ image, parent }) => {
  const srcFor = buildSrc(image);

  return (
    <picture className={`picture ${parent}__picture`}>
      {image.sizes.map((size) => (
        <source
          key={`source-${size}`}
          media={`(max-width: ${size * 0.8}px)`}
          srcSet={srcFor(size)}
          className={`picture__source ${parent}__source`}
        />
      ))}
      <img
        src={srcFor(128)}
        alt={image.alt}
        className={`picture__image ${parent}__image`}
      />
    </picture>
  );
};

export default Picture;
