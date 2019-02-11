import { connect } from 'react-redux';

import {
  Post,
  PostProps,
} from '../../../../components/Post';

import {
  postSelectors,
} from '../../../../store/works/works.selectors';

import {
  postActions,
} from '../../../../store/works/works.actions';

import { StoreType, ContainerType } from '../../../../store/types';

const mapStateToProps = (
  state: StoreType,
  props: PostProps
): PostProps => ({
  ...props,
  expanded: postSelectors.selectExpanded(state, props),
  short: postSelectors.selectShort(state, props),
  long: postSelectors.selectLong(state, props),
  title: postSelectors.selectTitle(state, props),
});

const mapDispatchToProps = (
  dispatch: any,
  props: PostProps,
): PostProps => ({
  ...props,
  expand: () => dispatch(postActions.setPostLength(props.namespace))
});

export default connect
  <PostProps, PostProps, ContainerType>
  (mapStateToProps)
  (Post);
