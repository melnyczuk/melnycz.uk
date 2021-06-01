import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { ImageType } from '../../types';
import './Image.scss';

type ImageProps = HTMLAttributes<HTMLImageElement> &
  Pick<ImageType, 'name' | 'url'>;

const Image: FC<ImageProps> = ({ className, name, url }) => (
  <img className={classNames('image', className)} alt={name} src={url} />
);

export default Image;
