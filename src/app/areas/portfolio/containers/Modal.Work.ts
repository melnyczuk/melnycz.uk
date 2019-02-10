import { connect } from 'react-redux';

import {
  Modal,
  ModalProps,
} from '../../../../components/Modal';

import {
  modalSelectors,
} from '../../../../store/works/works.selectors';

import {
  modalActions,
} from '../../../../store/works/works.actions';

import { StoreType, ContainerType } from '../../../../store/types';

import { Dispatch } from 'redux';

const mapStateToProps = (
  state: StoreType,
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


export default connect
  <ModalProps, ModalProps, ContainerType>
  (mapStateToProps, mapDispatchToProps)
  (Modal);
