import React from 'react';
import { connect } from 'react-redux';

import postStore from './post.store';

const { selectPostTitle } = postStore.selectors;

function Post({ title, classes = [], children = [] }) {
  const className = [...classes].join(' ') || null;
  return (
    <div className={className} >
      {title && <h2 key="title">{title}</h2>}
      {children}
    </div>
  )
}


const mapStateToProps = (state, props) => {
  const { namespace } = props;
  return {
    ...props,
    title: selectPostTitle(state, namespace),
  }
}

export default connect(mapStateToProps)(Post);
