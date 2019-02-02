import React from 'react';

import Post from './PostContainer';
// import Punctum from './Punctum';
import Modal from './ModalContainer';

const Work = (
  {
    namespace,
  }
) => {
  return (
    <section>
      {/* <Punctum namespace={namespace} /> */}
      <Modal namespace={namespace}>
        <Post namespace={namespace} />
      </Modal>
    </section>
  );
};

export default Work;
