import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import ProgressiveImage from 'react-progressive-image';

import { ImageType } from '../../types';
import styles from './Image.module.scss';

type ImageProps = HTMLAttributes<HTMLImageElement> &
  Pick<ImageType, 'name' | 'url' | 'thumbnail' | 'width' | 'height'>;

const Monochrome: FC<HTMLAttributes<HTMLOrSVGElement>> = ({ className }) => (
  <svg className={className}>
    <filter
      id="monochrome"
      colorInterpolationFilters="sRGB"
      x="0"
      y="0"
      height="100%"
      width="100%"
    >
      {/* #00309c as rgb percentages is r: 0%, g: 18.8%, b: 61.2% */}
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.000
                0 0 0 0 0.188
                0 0 0 0 0.612 
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
        <Monochrome className={styles['monochrome']} />
        <img
          className={classNames(
            styles['image'],
            { [styles['image--thumbnail']]: src === thumbnail },
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
