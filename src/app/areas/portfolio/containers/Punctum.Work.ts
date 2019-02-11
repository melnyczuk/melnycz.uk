import { connect } from 'react-redux';

import { Punctum, PunctumProps } from '../../../../components/Punctum';

import {
  punctumSelectors,
} from '../../../../store/works/works.selectors';

import {
  modalActions,
} from '../../../../store/works/works.actions';

import { StoreType, ContainerType } from '../../../../store/types';

const mapStateToProps = (
  state: StoreType,
  props: PunctumProps
): PunctumProps => ({
  ...props,
  alt: punctumSelectors.selectAlt(state, props),
  src: punctumSelectors.selectSrc(state, props),
});

const mapDispatchToProps = (
  dispatch: any,
  props: PunctumProps
): PunctumProps => ({
  ...props,
  showModal: () => dispatch(modalActions.setModalShow(props.namespace)),
});

export default connect
  <PunctumProps, PunctumProps, ContainerType>
  (mapStateToProps, mapDispatchToProps)
  (Punctum);
