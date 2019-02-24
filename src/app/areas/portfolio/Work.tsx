import * as React from 'react';

import {
  ModalContainer,
  PostContainer,
  PunctumContainer,
} from './containers';

interface WorkProps {
  namespace: string;
}

class Work extends React.PureComponent<WorkProps> {

  constructor(props: WorkProps) {
    super(props);
  }

  render() {

    const { namespace } = this.props;

    console.log(namespace);
    
    return (
      <section>
        <PunctumContainer namespace={namespace} />
        <ModalContainer namespace={namespace}>
          <PostContainer namespace={namespace} />
        </ModalContainer>
      </section>
    );
  }
}


export { Work, WorkProps };
