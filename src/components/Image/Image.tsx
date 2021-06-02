import React, { FC, HTMLAttributes } from 'react';
import ProgressiveImage from 'react-progressive-image';
import classNames from 'classnames';

import { ImageType } from '../../types';
import './Image.scss';

type ImageProps = HTMLAttributes<HTMLImageElement> &
  Pick<ImageType, 'name' | 'url' | 'thumbnail' | 'width' | 'height'>;

const Monochrome = () => (
  <svg className="monochrome">
    <filter
      id="monochrome"
      colorInterpolationFilters="sRGB"
      x="0"
      y="0"
      height="100%"
      width="100%"
    >
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0.025
                0 0 0 0 0.305
                1 0 0 0 0"
      />
    </filter>
  </svg>
);

const Image: FC<ImageProps> = ({
  className,
  url,
  thumbnail,
  name,
  width,
  height,
}) => (
  <ProgressiveImage src={url} placeholder={thumbnail}>
    {(src) => (
      <>
        <Monochrome />
        <img
          className={classNames(
            'image',
            { 'image--thumbnail': src === thumbnail },
            className
          )}
          width={width}
          height={height}
          src={src}
          alt={name}
          loading="lazy"
        />
      </>
    )}
  </ProgressiveImage>
);

export default Image;
