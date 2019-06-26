import React from 'react';
import { ImageType } from '../../types';
import { buildSrcWithBaseUrl } from '../../utils';

interface PictureProps {
  image: ImageType;
  baseUrl: string;
  parent: string;
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

const Picture: React.FunctionComponent<PictureProps> =
  ({image, baseUrl, parent}) => {
    const buildSrc = buildSrcWithBaseUrl(baseUrl)('images');
    return (
      <picture className={`picture ${parent}--picture`}>
        {getSources(image, buildSrc)}
        <img
          className={`picture--image ${parent}--image`}
          src={buildSrc(640)(image)}
          alt={image.alt}
        />
      </picture>
    );
  }

export default Picture;
