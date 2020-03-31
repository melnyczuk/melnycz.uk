import React, { useState, useEffect, FC } from 'react';
import fetch from 'isomorphic-fetch';
import YAML from 'yaml';
import Picture from './Picture';
import { ImageType } from '../types';
import '../styles/Post.scss';

export interface Props {
  namespace: string;
  title: string;
  images: ImageType[];
}

const Description = ({
  description,
}: {
  description: string[];
}): JSX.Element => (
  <div className="post post--desc">
    {description.map((text) => (
      <p className="post--desc--paragraph" key={`desc-${text}`}>
        {text}
      </p>
    ))}
  </div>
);

const buildImages = (image: ImageType) => (
  <Picture
    key={`${image.namespace}-${image.index}`}
    image={image}
    parent="post"
  />
);

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`../static/copy/${namespace}.yaml`)
    .then((resp: Response): Promise<string> => resp.text())
    .then(YAML.parse)
    .then(({ description }): Promise<string[]> => description);

const triggerFetch = (namespace, setDesc) => (): void => {
  (async () => await fetchDescription(namespace).then(setDesc))();
};

const Post: FC<Props> = ({ namespace, title, images }) => {
  const [desc, setDesc]: [string[], (d: string[]) => void] = useState([]);

  useEffect(triggerFetch(namespace, setDesc));

  return (
    <article className="post">
      {title && <h2 className="post--title">{title}</h2>}
      {desc && <Description description={desc} />}
      {images && images.map(buildImages)}
    </article>
  );
};

export default Post;
export { fetchDescription, triggerFetch, buildImages, Description };
