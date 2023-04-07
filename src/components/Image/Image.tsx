import classNames from 'classnames';
import magick from 'imagemagick';
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

type Features = magick.Features & { ['base filename']: string };

export const getImageType = async (src: string): Promise<ImageType> => {
  const {
    width = 0,
    height = 0,
    format = 'image/jpeg',
    ['base filename']: name = new URL(src).pathname.split('/').reverse()[0],
  } = await new Promise<Features>((resolve, reject) =>
    magick.identify(src, (err, res) => {
      if (err) reject(err);
      if (res) resolve(res as Features);
    })
  );
  const thumbnail = await new Promise<string>((resolve, reject) =>
    magick.resize(
      {
        srcPath: src,
        width: Math.floor(width * 0.01),
        height: Math.floor(height * 0.01),
        format,
      },
      (err: unknown, res: string) => {
        if (err) reject(err);
        if (res) {
          const b64 = Buffer.from(res, 'binary').toString('base64');
          resolve(`data:image/jpeg;base64,${b64}`);
        }
      }
    )
  );
  return { width, height, src, name, thumbnail };
};
