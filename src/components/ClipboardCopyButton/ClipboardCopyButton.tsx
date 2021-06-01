import classNames from 'classnames';
import React, { useState } from 'react';
import { FCWithClassAndStyle } from '../../types';
import './ClipboardCopyButton.scss';

const Contact: FCWithClassAndStyle<{ content: string }> = ({
  className,
  children,
  content,
}) => {
  const [didCopy, setDidCopy] = useState(false);
  return (
    <button
      className={classNames(
        'clipboard-copy__button',
        {
          'clipboard-copy__button--copied': didCopy,
        },
        className
      )}
      onClick={() =>
        navigator.clipboard
          .writeText(content)
          .then(() => setDidCopy(true))
          .then(() => setTimeout(() => setDidCopy(false), 50))
          .catch(() => false)
      }
    >
      {children}
    </button>
  );
};

export default Contact;
