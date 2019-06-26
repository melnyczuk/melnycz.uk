import React from 'react';
import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

interface PictureProps {
  image: ImageType;
  parent: string;
}


const getSources =
  (bSrc) =>
    (size, i) =>
      (<source key={`source-${i}`} media={`(max-width: ${size * 0.8}px)`}
          srcSet={bSrc(size)} />);

const getClass =
  (parent: string) =>
    (elm: string): string =>
      elm === 'picture'
      ? `picture ${parent}--picture`
      : `picture--${elm} ${parent}--${elm}`;

const Picture: React.FunctionComponent<PictureProps> =
  ({ image, parent }) => {
    const getClassForElm = getClass(parent)
    const buildSource = buildSrc(image);
    const getSrcs = getSources(buildSource);
    return (
      <picture className={getClassForElm('picture')}>
        {image.sizes.map(getSrcs)}
        <img src={buildSource(640)} alt={image.alt}
          className={getClassForElm('image')} />
      </picture>
    );
  }


export { Picture, PictureProps };
