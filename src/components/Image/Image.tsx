import classNames from 'classnames';
import React from 'react';
import { FCWithClassAndStyle, ImageType } from '../../types';
import './Image.scss';

const Image: FCWithClassAndStyle<Omit<ImageType, 'id'>> = ({
  className,
  name,
  url,
  description,
}) => (
  <img
    className={classNames('image', className)}
    alt={description || name}
    src={url}
  />
);

export default Image;
