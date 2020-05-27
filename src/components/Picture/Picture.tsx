import React, { FC } from 'react';

import { sizes } from '../../../static/info.json';
import { buildSrc } from '../../utils';
import { Image } from '../../models';

import './Picture.scss';

interface PictureProps {
  image: Image;
  parent: string;
  path: string;
}

const Picture: FC<PictureProps> = ({ image, parent, path }) => {
  const srcFor = buildSrc(path)(image);

  return (
    <picture className={`picture ${parent}__picture`}>
      {sizes.map((size) => (
        <source
          className={`picture__source ${parent}__source`}
          key={`source-${size}`}
          media={`(max-width: ${size * 0.8}px)`}
          sizes={sizes.join(',')}
          srcSet={srcFor(size)}
        />
      ))}
      <img
        src={srcFor(Math.min(...sizes))}
        alt={image?.alt}
        className={`picture__image ${parent}__image`}
      />
    </picture>
  );
};

export default Picture;
