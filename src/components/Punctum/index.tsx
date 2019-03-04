import * as React from 'react';

import './Punctum.scss';

interface PunctumVals {
  className: string;
  src: string;
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
      className,
      src,
      alt,
      title,
      showModal,
    }: PunctumProps = this.props;

    if (src) {
      return (
        <div
          className='punctum'
          onClick={showModal}
        >
          <img
            className={`punctum-image ${className}`}
            src={src}
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
