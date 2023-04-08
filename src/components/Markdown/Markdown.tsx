import classnames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';

import styles from './Markdown.module.scss';

type MarkdownProps = HTMLAttributes<HTMLDivElement> & { content: string };

const { processSync } = remark().use(remarkReact);

const Markdown: FC<MarkdownProps> = ({ className, content }) => {
  const md = useMemo<ReactNode>(() => processSync(content).result, [content]);
  return <div className={classnames(styles['text'], className)}>{md}</div>;
};

export default Markdown;
