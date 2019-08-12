import { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import Picture from './Picture';
import { ImageType } from '../types';
import '../styles/Post.scss';

export interface Props {
  namespace: string;
  title: string;
  images: ImageType[];
}

const Description = ({ description }: { description: string[] }) =>
  (
    <div className='post post--desc'>
      {
        description.map(text => (
          <p className='post--desc--paragraph' key={`desc-${text}`}>
            {text}
          </p>
        ))
      }
    </div>
  );

const buildImages = (image: ImageType) =>
  (
    <Picture
      key={`${image.namespace}-${image.index}`}
      image={image}
      parent='post'
      max={640}
    />
  );

const triggerFetch =
  (namespace, setDesc) =>
    () => {
      (async () => await fetchDescription(namespace).then(setDesc))()
    };

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`../static/copy/${namespace}.yaml`)
    .then(resp => resp.text())
    .then(yaml.load)
    .then(({ description }: any) => description);

export default ({ namespace, title, images }: Props) => {
  const [desc, setDesc] = useState([]);

  useEffect(triggerFetch(namespace, setDesc));

  return (
    <article className='post'>
      {title && <h2 className='post--title'>{title}</h2>}
      {desc && <Description description={desc} />}
      {images && images.map(buildImages)}
    </article>
  );
};

export { fetchDescription, triggerFetch, buildImages, Description };
