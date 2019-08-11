import { Fragment, useState, useEffect } from 'react';
import yaml from 'js-yaml';
import Picture from './Picture';
import { ImageType } from '../types';

export interface Props {
  namespace: string;
  title: string;
  images: ImageType[];
}

const buildParagraph = (text: string, i: number): JSX.Element => (
  <Fragment key={`desc-${i}`}>
    <p className='post post--desc'>{text}</p>
    <br />
  </Fragment>
);

const buildImages =
  (image: ImageType) => (
    <Picture
      key={`${image.namespace}-${image.index}`}
      image={image}
      parent='post'
      max={640}
    />
  );

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`./static/copy/${namespace}.yaml`)
    .then(resp => resp.text())
    .then(yaml.load)
    .then(({ description }: any) => description);

export default ({ namespace, title, images }: Props) => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    (async () => await fetchDescription(namespace).then(setDesc))();
  });

  return (
    <article className='post'>
      {title && <h2 className='post--title'>{title}</h2>}
      {desc && desc.map(buildParagraph)}
      {images && images.map(buildImages)}
    </article>
  )
};

export { fetchDescription, buildParagraph };
