import * as React from 'react';

interface PunctumProps {
  namespace: string;
  src: string;
  alt: string;
  showModal: () => void;
}

class Punctum extends React.PureComponent <PunctumProps> {
  
  constructor(props: PunctumProps){
    super(props);
  }

  render() {

    const {
      src,
      alt,
      showModal,
    }: PunctumProps = this.props;

    if (src) {
      return (<img src={src} alt={alt} onClick={showModal} />)
    }

    return null;
  }

}

export {
  Punctum,
  PunctumProps,
}
