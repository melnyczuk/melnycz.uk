import { createSelector } from 'reselect';
import { StoreType } from '../../types';
import selectRoot from './root';
import { AreaProps } from '../../Area';
import { filterWorks } from '../../utils';

const selectLabel = (state: StoreType, props: AreaProps) => {
  const { match: {params: { area }}} = props;
  return area;
}

const selectWorks = createSelector(
  [selectRoot.works, selectLabel],
  (works, label) => filterWorks(works)(label)
);

export default {
  label: selectLabel,
  works: selectWorks,
}
