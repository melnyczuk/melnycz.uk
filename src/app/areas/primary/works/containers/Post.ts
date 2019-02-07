import { connect } from 'react-redux';

import Post from '../../../../../components/post/Post';

import {
  post,
} from '../../../../../store/areas/primary/works/works.selectors';

const mapStateToProps = (state, props) => ({
  expand: post.selectExpand(state, props),
  short: post.selectShort(state, props),
  long: post.selectLong(state, props),
  title: post.selectTitle(state, props),
});

export default connect(mapStateToProps)(Post);
