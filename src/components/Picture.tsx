import React from 'react';

import '../styles/Picture.scss';

import { ImageType } from '../types';
import { buildSrc } from '../utils';

export interface Props {
  image: ImageType;
  max: number;
  parent: string;
}

const getSourcesByMax =
  (max: number) =>
    (srcBuilder: (n: number | null) => string, ) =>
      (size: number, i: number) =>
        (
          <source
            key={`source-${i}`}
            media={`(max-width: ${Math.min(size * 0.8, max)}px)`}
            srcSet={srcBuilder(size)}
          />
        );

const getClassByParent =
  (parent: string) =>
    (elm: string): string =>
      (elm === 'picture'
        ? `picture ${parent}--picture`
        : `picture--${elm} ${parent}--${elm}`);

export default ({ image, max, parent }: Props) => {
  const getClassForElm = getClassByParent(parent);
  const sourceBuilder = buildSrc(image);
  const getSources = getSourcesByMax(max);
  return (
    <picture className={getClassForElm('picture')}>
      {image.sizes.map(getSources(sourceBuilder))}
      <img
        src={sourceBuilder(640)}
        alt={image.alt}
        className={getClassForElm('image')}
      />
    </picture>
  );
};

export { getSourcesByMax, getClassByParent }
