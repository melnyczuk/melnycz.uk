import React, { FC } from 'react';
import { Image, Text } from '../../components';
import { ProjectType } from '../../types';
import './Project.scss';

const formatTitle = (title: string): string =>
  title
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substring(1, word.length))
    .join(' ');

const Project: FC<ProjectType> = ({ hide, name, images, texts, year }) =>
  !hide &&
  texts &&
  images && (
    <div className="project">
      <h2 className="project__title">{formatTitle(name)}</h2>
      <h3 className="project__year">{new Date(year).getFullYear()}</h3>
      <div className="project__text">
        {texts.map(({ name, url }) => (
          <Text key={name} name={name} url={url} />
        ))}
      </div>
      <div className="project__images">
        {images.map(({ name, url }) => (
          <Image key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );

export default Project;
