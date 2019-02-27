import * as React from 'react';

interface PunctumVals {
  className: string;
  src: string;
  alt: string;
}

interface PunctumFuncs {
  showModal: () => void;
}

interface PunctumProps extends PunctumVals, PunctumFuncs {
  namespace: string;
}

class Punctum extends React.PureComponent <PunctumProps> {
  
  constructor(props: PunctumProps){
    super(props);
  }

  render() {

    const {
      className,
      src,
      alt,
      showModal,
    }: PunctumProps = this.props;

    if (src) {
      return (<img className={className} src={src} alt={alt} onClick={showModal} />)
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
