import React from 'react';

import Button from '../button/Button';

const Post = (
  {
    title,
    short,
    long,
    className,
    children,
  }
) => {
  return (
    <article className={className} >
      {title && <h2 key="title">{title}</h2>}
      {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
      {!!(long) && <Button type={"expand"} />}
      {children}
    </article>
  )
};

export default Post;
