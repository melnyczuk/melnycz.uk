import React from 'react';
import { connect } from 'react-redux';

import Post from '../../../components/post/Post';
import Punctum from '../../../components/punctum/Punctum';
import Modal from '../../../components/modal/Modal';

import {
  getWorkModalVisibility,
  getWorkPunctumAltText,
  getWorkPunctumSource
} from '../../../store/areas/primary/works/works.selectors';

import {
  setWorkModalVisible,
} from '../../../store/areas/primary/works/works.actions';

export const Work = (
  {
    namespace,
    visible,
    src,
    alt,
    showModal
  }
) => {
  return (
    <section namespace={namespace} >
      <Punctum src={src} alt={alt} showModal={showModal} />
      <Modal visible={visible}>
        <Post namespace={namespace} />
      </Modal>
    </section>
  );
};

const mapStateToProps = (state, props) => {
  return {
    src: getWorkPunctumSource(state, props),
    alt: getWorkPunctumAltText(state, props),
    visible: getWorkModalVisibility(state, props),
  }
};

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    showModal: () => dispatch(setWorkModalVisible(namespace))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);
