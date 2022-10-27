import classnames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';

import styles from './Markdown.module.scss';

type MarkdownProps = HTMLAttributes<HTMLDivElement> & {
  content: string;
};

const Markdown: FC<MarkdownProps> = ({ className, content }) => (
  <div className={classnames(styles['text'], className)}>
    {remark().use(remarkReact).processSync(content).result}
  </div>
);

export default Markdown;
