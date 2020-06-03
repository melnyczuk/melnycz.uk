/* global fetch */
import React, { FC, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import './Post.scss';

const fetchDescription = (path): Promise<string> =>
  fetch(`${path}/copy.md`)
    .then((resp: Response): Promise<string> => resp.status === 200 && resp.text())

interface DescriptionProps {
  path: string;
}

const Description: FC<DescriptionProps> = ({ path }) => {
  const [copy, setCopy] = useState<string>();

  useEffect(() => {
    fetchDescription(path).then(setCopy);
  }, [path]);

  return !copy ? null : <ReactMarkdown className="post post__description" source={copy} />;
};

export default Description;
