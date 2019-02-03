import { connect } from 'react-redux';

import Post from '../../../../../components/post/Post';

import {
  selectWorkPostTitle,
  selectWorkPostDescLong,
  selectWorkPostDescShort,
  selectWorkPostShouldExpand,
  selectWorkPortalImages
} from '../../../../../store/areas/primary/works/works.selectors';

const mapStateToProps = (state, props) => {
  return {
    title: selectWorkPostTitle(state, props),
    short: selectWorkPostDescShort(state, props),
    long: selectWorkPostDescLong(state, props),
    expand: selectWorkPostShouldExpand(state, props),
    images: selectWorkPortalImages(state, props),
  };
};

export default connect(mapStateToProps)(Post);