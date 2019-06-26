import React from 'react';
import { PunctumContainer, ModalContainer, PostContainer } from "./containers";

const Work: React.FunctionComponent<{ namespace: string; }> =
  ({ namespace }) =>
    (
      <section className='work' id={namespace}>
        <PunctumContainer namespace={namespace} />
        <ModalContainer namespace={namespace}>
          <PostContainer namespace={namespace} />
        </ModalContainer>
      </section>
    );

export default Work;
