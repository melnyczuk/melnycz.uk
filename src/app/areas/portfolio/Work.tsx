import * as React from 'react';

import {
  ModalContainer,
  PostContainer,
  PunctumContainer,
} from './containers';

interface WorkProps {
  namespace: string;
}

const Work = ({ namespace }: WorkProps): JSX.Element => (
  <section>
    <PunctumContainer namespace={namespace} />
    <ModalContainer namespace={namespace}>
      <PostContainer namespace={namespace} />
    </ModalContainer>
  </section>
);

export { Work, WorkProps };
