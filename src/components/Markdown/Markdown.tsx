import classnames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';

import { MarkdownType } from '../../types';
import styles from './Markdown.module.scss';

type MarkdownProps = HTMLAttributes<HTMLDivElement> & MarkdownType;

const { processSync } = remark().use(remarkReact);

const Markdown: FC<MarkdownProps> = ({ className, body }) => {
  const md = useMemo<ReactNode>(() => processSync(body).result, [body]);
  return <div className={classnames(styles['text'], className)}>{md}</div>;
};

export default Markdown;
