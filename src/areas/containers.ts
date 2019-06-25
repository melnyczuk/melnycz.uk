import { connect } from 'react-redux';

import { Area, AreaVals, AreaFuncs, AreaProps } from './Area';
import { selectAreaWorks } from '../store/works/selectors';
import { setActive } from '../store/active/actions';
import { StoreType } from '../types';

const AreaContainer = connect<AreaVals, AreaFuncs, {}>
(
  (state: StoreType, props: AreaProps) => ({
    works: selectAreaWorks(state, props),
  }),
  (dispatch: Function, props: AreaProps) => ({
    updateActive: (active: string) => dispatch(setActive(active))
  }),
)(Area);

export { AreaContainer };
