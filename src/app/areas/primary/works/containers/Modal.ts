import { connect } from 'react-redux';

import Modal from '../../../../../components/modal/Modal';

import {
  modal as modalSelectors,
} from '../../../../../store/areas/primary/works/works.selectors';

import {
  modal as modalActions,
} from '../../../../../store/areas/primary/works/works.actions';

import { StoreState, Container } from '../../../../../store/store.d';
import { ModalProps } from '../../../../../components/modal/modal.d';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: StoreState,
  props: ModalProps
): ModalProps => ({
  ...props,
  visible: modalSelectors.selectVisible(state, props),
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: ModalProps
): ModalProps => ({
  ...props,
  hide: () => dispatch(modalActions.setModalHide(props.namespace))
})


export default connect<ModalProps, ModalProps, Container>(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
