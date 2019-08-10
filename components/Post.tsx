import React, { useState, useEffect, Suspense } from 'react';
import yaml from 'js-yaml';

export interface Props {
  namespace: string;
}

const buildParagraph = (text: string, i: number): JSX.Element => (
  <React.Fragment key={`desc-${i}`}>
    <p className='post post--desc'>{text}</p>
    <br />
  </React.Fragment>
);

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`./static/copy/${namespace}.yaml`)
    .then(resp => resp.text())
    .then(yaml.load)
    .then(({ description }: any) => description);

export default ({ namespace }: Props) => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    (async () => await fetchDescription(namespace).then(setDesc))();
  });

  return (
    // <Suspense fallback={<article>Loading...</article>}>
      <article className='post'>
        {/* {title && <h2 className='post--title'>{title}</h2>} */}
        {desc && desc.map(buildParagraph)}
        {/* {images && images.map(buildImages)} */}
        {/* {children} */}
      </article>
    // </Suspense>
  )
};

export { fetchDescription, buildParagraph };