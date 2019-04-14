import * as React from 'react';

import {
  PunctumContainer,
  ModalContainer,
  PostContainer,
} from './containers';

export default () => (
  <div className='about'>
    <PunctumContainer namespace='aboutbio' />
    <ModalContainer namespace='aboutbio' >
      <PostContainer namespace='aboutbio' />
    </ModalContainer>
  </div>
);
