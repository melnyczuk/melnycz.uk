/* global fetch */
import React, { FC, useState, useEffect } from 'react';
import YAML from 'yaml';

import './Post.scss';

const fetchDescription = (path): Promise<string[]> =>
  fetch(`${path}/copy.yaml`)
    .then((resp: Response): Promise<string> => resp.text())
    .then(YAML.parse)
    .then(({ copy }): Promise<string[]> => copy);

interface DescriptionProps {
  path: string;
}

const Description: FC<DescriptionProps> = ({ path }) => {
  const [paragraphs, setParagraphs] = useState<string[]>();

  useEffect(() => {
    fetchDescription(path).then(setParagraphs);
  }, [path]);

  return (
    <div className="post post__description">
      {paragraphs?.map((text) => (
        <p className="post__paragraph" key={`desc-${text}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Description;
