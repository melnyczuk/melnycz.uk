import * as React from 'react';

import './Punctum.scss';
import { ImageType } from '../../types';

interface PunctumVals {
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

const buildSrc = ({ path = '', namespace = '', index = 0, ext = '' }: ImageType): string => {
  return `${path}/thumbs/${namespace}-${index}.${ext}`
}

class Punctum extends React.PureComponent<PunctumProps> {

  constructor(props: PunctumProps) {
    super(props);
  }

  render() {

    const {
      className,
      img,
      alt,
      title,
      showModal,
    }: PunctumProps = this.props;

    if (img) {
      return (
        <div
          className='punctum'
          onClick={showModal}
        >
          <img
            className={`punctum-image ${className}`}
            src={buildSrc(img)}
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
