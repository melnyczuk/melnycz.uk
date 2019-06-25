import React from 'react';
import { PunctumContainer, ModalContainer, PostContainer } from './containers';

interface WorkProps {
  namespace: string;
}

const Work: React.FunctionComponent<WorkProps> = ({ namespace }) =>
  (
    <section className='work' id={namespace}>
      <PunctumContainer namespace={namespace} />
      <ModalContainer namespace={namespace}>
        <PostContainer namespace={namespace} />
      </ModalContainer>
    </section>
  );

export default Work;
