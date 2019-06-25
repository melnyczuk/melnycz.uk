import React from 'react';
import { PunctumContainer, ModalContainer, PostContainer } from './containers';
export default ({ namespace } ) => (
  <section className='work' id={namespace}>
    <PunctumContainer namespace={namespace} />
    <ModalContainer namespace={namespace}>
      <PostContainer namespace={namespace} />
    </ModalContainer>
  </section>
);
