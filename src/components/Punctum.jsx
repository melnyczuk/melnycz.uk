import React from 'react';
import { connect } from 'react-redux';

import punctum from '../store/punctum.store'
import modal from '../store/modal.store';

const { 
  selectPunctumImageSource, 
  selectPunctumImageAltText 
} = punctum.selectors;

const { setModalVisibility } = modal.actionCreators;

function Punctum ({ src, alt, classes = [], showModal }) {
  const className = [...classes].join(' ') || null;
  return (
    <div 
      className={className} 
      onClick={showModal} 
    >
      {src && <img src={src} alt={alt} />}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { namespace } = props;
  return {
    ...props,
    src: selectPunctumImageSource(state, namespace),
    alt: selectPunctumImageAltText(state, namespace)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    showModal: () => dispatch(setModalVisibility({ namespace, value: true }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Punctum);