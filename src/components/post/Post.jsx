import React from 'react';

import Button from '../button/Button';
import Portal from '../portal/Portal';

import { joinClasses } from '../../utils';

const Post = (
  {
    namespace,
    title,
    short,
    long,
    images,
    classes,
  }
) => {
  return (
    <article className={joinClasses(classes)} >
      {title && <h2 key="title">{title}</h2>}
      {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
      {!!(long) && <Button type={"expand"} />}
      {images && <Portal namespace={namespace} />}
    </article>
  )
};

export default Post;
