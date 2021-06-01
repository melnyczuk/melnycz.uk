import React, { FC, HTMLAttributes } from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import classnames from 'classnames';
import { useTextFile } from '../hooks';
import { TextType } from '../types';

type TextProps = HTMLAttributes<HTMLDivElement> & Pick<TextType, 'url'>;

const Text: FC<TextProps> = ({ className, url }) => {
  const file = useTextFile(url);

  return (
    <div className={classnames('text', className)}>
      {remark().use(remarkReact).processSync(file).result}
    </div>
  );
};

export default Text;
