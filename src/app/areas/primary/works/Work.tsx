import React from 'react';

import Modal from './containers/Modal';
import Portal from './containers/Portal';
import Post from './containers/Post';
import Punctum from './containers/Punctum';
import { Container } from '../../../../store/store';

const Work = (
  {
    namespace,
  }: Container,
): JSX.Element => (
  <section>
    <Punctum namespace={namespace} />
    <Modal namespace={namespace}>
      <Post namespace={namespace}>
        <Portal namespace={namespace} />
      </Post>
    </Modal>
  </section>
);

export default Work;
