import classNames from 'classnames';
import { FC, HTMLAttributes, useState } from 'react';
import './ClipboardCopyButton.module.scss';

type ClipboardCopyButtonProps = HTMLAttributes<HTMLButtonElement> & {
  content: string;
};

const ClipboardCopyButton: FC<ClipboardCopyButtonProps> = ({
  className,
  children,
  content,
}) => {
  const [didCopy, setDidCopy] = useState<boolean>(null);
  return (
    <button
      className={classNames(
        'clipboard-copy__button',
        {
          'clipboard-copy__button--copied': didCopy === true,
          'clipboard-copy__button--copy-failed': didCopy === false,
        },
        className
      )}
      onClick={() =>
        navigator.clipboard
          .writeText(content)
          .then(() => setDidCopy(true))
          .catch(() => setDidCopy(false))
          .finally(() => setTimeout(() => setDidCopy(null), 50))
      }
    >
      {children}
    </button>
  );
};

export default ClipboardCopyButton;
