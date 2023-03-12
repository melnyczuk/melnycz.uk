import classnames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { useAsync } from 'react-use';
import remark from 'remark';
import remarkReact from 'remark-react';

import styles from './Markdown.module.scss';

type MarkdownProps = HTMLAttributes<HTMLDivElement> & {
  content: string;
  remote?: string;
};

const Markdown: FC<MarkdownProps> = ({ className, content, remote }) => {
  const remoteContent = useAsync<string | null>(async () => {
    if (!remote) {
      return content;
    }
    const resp = await fetch(remote);
    return await resp.text();
  }, [content, remote]);

  const _content = remoteContent.loading ? content : remoteContent.value;

  return (
    <div className={classnames(styles['text'], className)}>
      {remark().use(remarkReact).processSync(_content).result}
    </div>
  );
};

export default Markdown;
