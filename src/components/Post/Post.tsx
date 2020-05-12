import React, { useState, useEffect, FC } from 'react';
import fetch from 'isomorphic-fetch';
import YAML from 'yaml';

import Picture from '../Picture';
import { ImageType } from '../../types';

import './Post.scss';

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

const keyFrom = ({ namespace, index }: ImageType): string =>
  `${namespace}-${index}`;

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`../static/copy/${namespace}.yaml`)
    .then((resp: Response): Promise<string> => resp.text())
    .then(YAML.parse)
    .then(({ description }): Promise<string[]> => description);

const triggerFetch = (namespace, setDesc) => {
  (async () => await fetchDescription(namespace).then(setDesc))();
};

export interface PostProps {
  namespace: string;
  title: string;
  images: ImageType[];
}

const Post: FC<PostProps> = ({ namespace, title, images }) => {
  const [desc, setDesc] = useState<string[]>();

  useEffect(() => triggerFetch(namespace, setDesc));

  return (
    <article className="post">
      {title && <h2 className="post--title">{title}</h2>}
      {desc && <Description description={desc} />}
      {images &&
        images.map((image) => (
          <Picture key={keyFrom(image)} image={image} parent="post" />
        ))}
    </article>
  );
};

export default Post;
