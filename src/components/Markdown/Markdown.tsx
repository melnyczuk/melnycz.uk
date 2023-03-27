import classnames from 'classnames';
import { FC, HTMLAttributes, ReactElement, useMemo } from 'react';
import { useAsync } from 'react-use';
import remark from 'remark';
import remarkReact from 'remark-react';

import { RemoteContentType } from '../../types';
import { fetchRemoteContent } from '../../utils';
import styles from './Markdown.module.scss';

type MarkdownProps = HTMLAttributes<HTMLDivElement> & RemoteContentType;

const { processSync } = remark().use(remarkReact);

const Markdown: FC<MarkdownProps> = ({ className, local, url }) => {
  const { value, loading } = useAsync<string | null>(
    async () => await fetchRemoteContent(url),
    [url]
  );

  const content = useMemo(
    () => processSync((loading ? local : value) ?? '').result as ReactElement,
    [loading, value, local]
  );

  return <div className={classnames(styles['text'], className)}>{content}</div>;
};

export default Markdown;
