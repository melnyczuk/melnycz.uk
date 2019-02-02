import React from 'react';
import { connect } from 'react-redux';

import Post from '../../../../components/post/Post';

import {
  getWorkPostTitle,
  getWorkPostDescLong,
  getWorkPostDescShort,
  getWorkPostShouldExpand,
  getWorkPortalImages
} from '../../../../store/areas/primary/works.selectors';

const mapStateToProps = (state, props) => {
  return {
    title: getWorkPostTitle(state, props),
    short: getWorkPostDescShort(state, props),
    long: getWorkPostDescLong(state, props),
    expand: getWorkPostShouldExpand(state, props),
    images: getWorkPortalImages(state, props),
  };
};

export default connect(mapStateToProps)(({
    title,
    short,
    long,
    expand,
    images,
  }) => {
  return (
    <Post
      title={title}
      short={short}
      long={long}
      expand={expand}
      images={images}
    />
  )
});