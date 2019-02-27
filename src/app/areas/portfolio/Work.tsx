import * as React from 'react';

import {
  ModalContainer,
  PostContainer,
  PunctumContainer,
} from './portfolio.containers';

interface WorkProps {
  namespace: string;
}

class Work extends React.PureComponent<WorkProps> {

  constructor(props: WorkProps) {
    super(props);
  }

  render() {

    const { namespace } = this.props;
    
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
