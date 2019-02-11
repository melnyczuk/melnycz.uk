import * as React from 'react';

import Modal from './containers/Modal.Work';
import Portal from './containers/Portal.Work';
import Post from './containers/Post.Work';
import Punctum from './containers/Punctum.Work';

interface WorkProps {
  namespace: string;
}

const Work = ({ namespace }: WorkProps): JSX.Element => (
  <section>
    <Punctum namespace={namespace} />
    <Modal namespace={namespace}>
      <Post namespace={namespace}>
        {/* <Portal namespace={namespace} /> */}
      </Post>
    </Modal>
  </section>
);

export default Work;
