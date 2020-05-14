import React, { FC, useState, useEffect } from 'react';

import fetch from 'isomorphic-fetch';
import YAML from 'yaml';

const fetchDescription = (namespace): Promise<string[]> =>
  fetch(`../static/copy/${namespace}.yaml`)
    .then((resp: Response): Promise<string> => resp.text())
    .then(YAML.parse)
    .then(({ description }): Promise<string[]> => description);

interface DescriptionProps {
  namespace: string;
}

const Description: FC<DescriptionProps> = ({ namespace }) => {
  const [paragraphs, setParagraphs] = useState<string[]>();

  useEffect(() => {
    fetchDescription(namespace).then(setParagraphs);
  }, [namespace, setParagraphs]);

  return (
    <div className="post post__description">
      {paragraphs?.map((text) => (
        <p className="post__description__paragraph" key={`desc-${text}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Description;
