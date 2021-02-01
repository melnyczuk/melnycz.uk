import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import classnames from 'classnames';
import { useTextFile } from '../../hooks';
import { FCWithClassAndStyle, TextType } from '../../types';
import './Text.scss';

const Text: FCWithClassAndStyle<TextType> = ({ className, style, url }) => {
  const file = useTextFile(url);

  return (
    <div style={style} className={classnames('text', className)}>
      {remark().use(remarkReact).processSync(file).result}
    </div>
  );
};

export default Text;
