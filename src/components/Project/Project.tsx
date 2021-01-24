import React, { FC, useRef } from 'react';
import { Image, Text } from '../../components';
import { ProjectType } from '../../types';
import './Project.scss';

const formatTitle = (title: string): string =>
  title
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substring(1, word.length))
    .join(' ');

const Project: FC<ProjectType> = ({ name, images, text, year }) => {
  const title = useRef<HTMLDivElement>(null);

  return (
    <div className="project">
      <h2 className="project__title sticky" ref={title}>
        {formatTitle(name)}
      </h2>
      <div
        className="project__text sticky"
        style={{ top: title?.current?.offsetHeight }}
      >
        {text && <Text name={text.name} url={text.url} />}
      </div>
      <h3 className="project__year sticky">{new Date(year).getFullYear()}</h3>
      <div className="project__images">
        {images.map(({ name, url }) => (
          <Image key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Project;
