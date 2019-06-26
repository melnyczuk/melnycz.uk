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

const getClass =
  (parent: string) =>
    (elm: string): string =>
      elm === 'picture'
      ? `picture ${parent}--picture`
      : `picture--${elm} ${parent}--${elm}`;

const Picture: React.FunctionComponent<PictureProps> =
  ({ image, parent }) => {
    const buildSrc = buildSrcWithBaseUrl(baseUrl)('images');
    const getClassForElm = getClass(parent)
    return (
      <picture className={getClassForElm('picture')}>
        {getSources(image, buildSrc)}
        <img
          className={getClassForElm('image')}
          src={buildSrc(640)(image)}
          alt={image.alt}
        />
      </picture>
    );
  }

export default Picture;
