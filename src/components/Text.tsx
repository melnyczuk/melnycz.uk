import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import classnames from 'classnames';
import { useTextFile } from '../hooks';
import { FCWithClassAndStyle, TextType } from '../types';

const Text: FCWithClassAndStyle<Omit<TextType, 'id'>> = ({
  className,
  url,
}) => {
  const file = useTextFile(url);

  return (
    <div className={classnames('text', className)}>
      {remark().use(remarkReact).processSync(file).result}
    </div>
  );
};

export default Text;
