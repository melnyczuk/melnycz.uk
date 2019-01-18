import React from 'react';
import { connect } from 'react-redux';

import Post from '../../../components/post/Post';
import Modal from '../../../components/modal/Modal';

import {
  getWorkModalVisibility,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource,
} from '../../../store/areas/primary/works/works.selectors';

import { getWorkPropertyFromState } from '../../../store/areas/primary/works/works.selectors';

import {
  setWorkModalVisibility,
} from '../../../store/areas/primary/works/works.actions';

function Works ({namespace, src, alt, title, showModal}) {
  console.log(src);
  return (
    <section namespace={namespace} >
    <Punctum src={src} alt={alt} showModal={showModal} />
    <Modal>
      <Post title={title} />
    </Modal>
    </section>
  )
}

function Punctum ({src, alt, showModal}) {

  if (src) {
    return(<img src={src} alt={alt} onClick={showModal} />)
  } return null;
}

const mapStateToProps = (state, props) => {

  return {
    src: getWorkPunctumSource(state, props),
    alt: getWorkPunctumAltText(state, props),
    visible: getWorkModalVisibility(state, props),
    title: getWorkPostTitle(state, props),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    showModal: () => dispatch(setWorkModalVisibility({ namespace, value: true }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);
