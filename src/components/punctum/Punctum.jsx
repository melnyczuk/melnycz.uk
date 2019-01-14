import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../store/actionCreators';
import selectors from '../../store/selectors';

const {
  selectPunctumImageSource,
  selectPunctumImageAltText
} = selectors.punctum;

const { setModalVisibility } = actionCreators.modal;

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
