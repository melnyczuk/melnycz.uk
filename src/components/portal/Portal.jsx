import React from 'react';

import Button from '../button/Button';

const Portal = (
  {
    baseBinUrl,
    images,
  }
) => {
  return (
    <figure>
      <Button type='scroll-left' />
      {
        images && images.map((image, key) => {
          const { src, alt } = image;
          return <img key={key} src={`${baseBinUrl}/${src}`} alt={alt} />
        })
      }
      <Button type={'scroll-right'} />
    </figure>
  );
};

export default Portal;