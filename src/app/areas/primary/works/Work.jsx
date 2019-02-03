import React from 'react';

import Post from './containers/Post';
import Punctum from './containers/Punctum';
import Modal from './containers/Modal';

const Work = (
  {
    namespace,
  }
) => {
  return (
    <section>
      <Punctum namespace={namespace} />
      <Modal namespace={namespace}>
        <Post namespace={namespace} />
      </Modal>
    </section>
  );
};

export default Work;
