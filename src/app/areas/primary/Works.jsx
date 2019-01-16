import React from 'react';
import { connect } from 'react-redux';

import Punctum from '../../../components/punctum/Punctum';
import Modal from '../../../components/modal/Modal';

import {
  getWorkModalVisibility,
  getWorkPunctumAltText,
  getWorkPunctumSource,
} from '../../store/selectors/areas/main/works';

import {
  setWorkModalVisibility,
} from '../../store/actionCreators/modal.actions';

function Works ({namespace, src, alt}) {
  return (
    <section namespace={namespace}>
      <Punctum namespace={namespace} src={src} alt={alt} />
      <Modal namespace={namespace} />
    </section>
  )
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    src: getWorkPunctumSource(state, props),
    alt: getWorkPunctumAltText(state, props),
    visible: getWorkModalVisibility(state, props),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { namespace } = props;
  return {
    showModal: () => dispatch(setWorkModalVisibility({ namespace, value: true }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);
