import React from 'react';
import { connect } from 'react-redux';

import selectors from '../../store/selectors';

const { getPostTitle } = selectors.post;

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
    title: getPostTitle(state, namespace),
  }
}

export default connect(mapStateToProps)(Post);
