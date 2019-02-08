import { connect } from 'react-redux';

import Punctum from '../../../../../components/punctum/Punctum';

import {
  punctum,
} from '../../../../../store/areas/primary/works/works.selectors';

import {
  modal as modalActions,
} from '../../../../../store/areas/primary/works/works.actions';

import { StoreState, Container } from '../../../../../store/store';
import { PunctumProps } from '../../../../../components/punctum/punctum.d';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: StoreState,
  props: PunctumProps
): PunctumProps => ({
  ...props,
  alt: punctum.selectAlt(state, props),
  src: punctum.selectSrc(state, props),
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  props: PunctumProps
): PunctumProps => ({
  ...props,
  showModal: () => dispatch(modalActions.setModalShow(props.namespace)),
});

export default connect<PunctumProps, PunctumProps, Container>(
  mapStateToProps,
  mapDispatchToProps,
)(Punctum);
