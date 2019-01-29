import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import Portal from '../portal/Portal';

import {
  getWorkPostDescLong,
  getWorkPostDescShort,
  getWorkPostShouldExpand,
  getWorkPostTitle,
  getWorkPortalImages,
} from '../../store/areas/primary/works/works.selectors';

export const Post = (
  {
    namespace,
    title,
    short,
    long,
    images,
    className,
  }
) => {
  return (
    <article className={className} >
      {title && <h2 key="title">{title}</h2>}
      {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
      {!!(long) && <Button type={"expand"} />}
      {images && <Portal namespace={namespace} />}
    </article>
  )
};

const mapStateToProps = (state, props) => {
  const { classes = [] } = props;
  return {
    className: [...classes].join(' ') || null,
    title: getWorkPostTitle(state, props),
    short: getWorkPostDescShort(state, props),
    long: getWorkPostDescLong(state, props),
    expand: getWorkPostShouldExpand(state, props),
    images: getWorkPortalImages(state, props),
  };
};

export default connect(mapStateToProps)(Post);
