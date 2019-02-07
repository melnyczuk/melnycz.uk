import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

const Post = (
  {
    title,
    short,
    long,
    className,
    children,
  },
) => (
  <article className={className}>
    {title && <h2 key="title">{title}</h2>}
    {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
    {!!(long) && <Button purpose="expand" />}
    {children}
  </article>
);

Post.propTypes = {
  title: PropTypes.string,
  short: PropTypes.string,
  long: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
};

Post.defaultProps = {
  title: null,
  short: null,
  long: null,
  className: null,
  children: [],
};

export default Post;
