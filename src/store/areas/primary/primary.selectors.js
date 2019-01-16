import { selectArea } from '../areas.selectors';

module.exports = {
  selectPrimaryAreaState: (state) => selectArea(state, { namespace: 'primary' }),
}
