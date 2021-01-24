import React, { FC } from 'react';
import { ImageType } from '../../types';
import './Image.scss';

const Image: FC<ImageType> = ({ name, url, description }) => (
  <img className="image" alt={description || name} src={url} />
);

export default Image;
