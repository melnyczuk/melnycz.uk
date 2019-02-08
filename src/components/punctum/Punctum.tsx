import React from 'react';

export interface PunctumProps {
  namespace: string;
  src: string;
  alt: string;
  showModal: () => void;
}

const Punctum = (
  {
    src,
    alt,
    showModal,
  }: PunctumProps
): JSX.Element => {
  if (src) {
    return (<img src={src} alt={alt} onClick={showModal} />)
  }
  return null;
}

export default Punctum;
