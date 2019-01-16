import React from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../store/actionCreators';
import selectors from '../../store/selectors';

const {
  getPunctumImageSource,
  getPunctumImageAltText
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
