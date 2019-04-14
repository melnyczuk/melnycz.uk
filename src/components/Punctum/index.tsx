import * as React from 'react';

import './Punctum.scss';
import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

interface PunctumVals {
  baseURL: string;
  className: string;
  img: ImageType;
  alt: string;
  title: string;
}

interface PunctumFuncs {
  showModal: () => void;
}

interface PunctumProps extends PunctumVals, PunctumFuncs {
  namespace: string;
}

class Punctum extends React.PureComponent<PunctumProps> {

  constructor(props: PunctumProps) {
    super(props);
  }

  render() {

    const {
      baseURL,
      className,
      img,
      alt,
      title,
      showModal,
    }: PunctumProps = this.props;

    if (baseURL && img) {
      return (
        <div
          className='punctum'
          onClick={showModal}
        >
          <img
            className={`punctum-image ${className}`}
            src={buildSrc(baseURL, 'thumbs')(img)}
            alt={alt}
          />
          <div className="punctum-label">
            <h2
              className="punctum-title"
            >
              {title}
            </h2>
          </div>
        </div>
      )
    }

    return null;
  }

}

export {
  Punctum,
  PunctumProps,
  PunctumVals,
  PunctumFuncs,
}
