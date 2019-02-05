import React from 'react';
import PropTypes from 'prop-types';

// import Types from '../../../db/types.d';

import Button from '../button/Button';

const Portal = (
  {
    baseBinUrl,
    images,
    className,
  },
) => (
  <figure className={className}>
    <Button purpose="scroll-left" />
    {
      images && images.map((image) => {
        const {
          id, path, ext, alt,
        } = image;
        const src = `${baseBinUrl}/${path}/${id}.${ext}`;
        return <img key={id} src={src} alt={alt} />;
      })
    }
    <Button purpose="scroll-right" />
  </figure>
);

Portal.propTypes = {
  baseBinUrl: PropTypes.string,
  images: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    ext: PropTypes.string.isRequired,
    title: PropTypes.string,
    rank: PropTypes.number,
  }),
  className: PropTypes.string,
};

Portal.defaultProps = {
  baseBinUrl: null,
  images: [],
  className: null,
};

export default Portal;
