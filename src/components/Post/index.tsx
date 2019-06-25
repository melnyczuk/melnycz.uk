import React, { useEffect } from 'react';
import yaml from 'js-yaml';

import './Post.scss';

import { ImageType } from '../../types';
import Picture from '../Picture';

interface PostVals {
  className: string;
  description: string[];
  baseUrl: string;
  images?: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setDesc?: (data: string[]) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

const buildImages =
  (baseUrl: string) =>
    (image: ImageType, i: number): JSX.Element => {
      const { namespace, index } = image;
      return (
        <Picture
          key={`${namespace}-${index}`}
          image={image}
          baseUrl={baseUrl}
          className={`post post-img post-img_${i}`}
        />);
    };

const buildParagraph = (text: string, i: number): JSX.Element => (
  <React.Fragment key={`desc-${i}`} >
    <p className='post post-desc'>{text}</p>
    <br />
  </React.Fragment>
);

const Post: React.FunctionComponent<PostProps> =
  ({ namespace, images, baseUrl, description, className, children, setDesc }) =>
    {
      useEffect(() => {
        if (!description) {
          fetch(`./bin/copy/${namespace}.yaml`)
            .then(async resp => await resp.text())
            .then(yaml.load)
            .then(({ description }: any) => description)
            .then(setDesc);
        }
      });

      return (
        <article className={`post${className && ' ' + className}`}>
          {description && description.map(buildParagraph)}
          {images && images.map(buildImages(baseUrl))}
          {children}
        </article>
      );
    }

export {
  Post,
  PostProps,
  PostVals,
  PostFuncs,
};
