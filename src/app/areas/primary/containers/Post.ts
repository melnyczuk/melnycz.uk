import { connect } from 'react-redux';

import { Post, PostProps }  from '../../../../components/post/Post';

import {
  post as postSelectors,
} from '../../../../store/areas/primary/works/works.selectors';

import {
  postActions
} from '../../../../store/areas/primary/works/works.actions';

import { StoreState, Container } from '../../../../store/store';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: StoreState,
  props: PostProps
): PostProps => ({
  ...props,
  expanded: postSelectors.selectExpanded(state, props),
  short: postSelectors.selectShort(state, props),
  long: postSelectors.selectLong(state, props),
  title: postSelectors.selectTitle(state, props),
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: PostProps,
): PostProps => ({
  ...props,
  expand: () => dispatch(postActions.setPostLength(props.namespace))
});

export default connect<PostProps, PostProps, Container>(mapStateToProps)(Post);
