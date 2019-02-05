import React from 'react';
import PropTypes from 'prop-types';

import Modal from './containers/Modal';
import Portal from './containers/Portal';
import Post from './containers/Post';
import Punctum from './containers/Punctum';

const Work = (
  {
    namespace,
  },
) => (
  <section>
    <Punctum namespace={namespace} />
    <Modal namespace={namespace}>
      <Post namespace={namespace}>
        <Portal namespace={namespace} />
      </Post>
    </Modal>
  </section>
);

Work.propType = {
  namespace: PropTypes.string.isRequired,
};

export default Work;
