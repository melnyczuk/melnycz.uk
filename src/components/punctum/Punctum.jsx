import React from 'react';

const Punctum = (
  {
    src,
    alt,
    showModal
  }
) => {
  if (src) {
    return (<img src={src} alt={alt} onClick={showModal} />)
  }
  return null;
}

export default Punctum;