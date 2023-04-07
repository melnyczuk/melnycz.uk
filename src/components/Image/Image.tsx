import classNames from 'classnames';
import imageSize from 'image-size';
import { FC, HTMLAttributes } from 'react';
import ProgressiveImage from 'react-progressive-image';

import { ImageType } from '../../types';
import styles from './Image.module.scss';

type ImageProps = HTMLAttributes<HTMLImageElement> &
  Pick<ImageType, 'name' | 'src' | 'thumbnail' | 'width' | 'height'>;

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
  src,
  thumbnail,
  name,
  width,
  height,
}) => (
  <ProgressiveImage src={src} placeholder={thumbnail}>
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

export const getImageType = async (src: string): Promise<ImageType> => {
  const name = new URL(src).pathname.split('/').reverse()[0];
  const resp = await fetch(src);
  const arrayBuffer = await resp.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { width = 0, height = 0 } = imageSize(buffer);
  const thumbnail = `data:image/jpeg;base64,${buffer.toString('base64')}`;
  return { width, height, src, name, thumbnail };
};
