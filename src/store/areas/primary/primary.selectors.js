import { selectArea } from '../areas.selectors';

const selectPrimaryAreaState = (state) => selectArea(state, { namespace: 'primary' })

export { selectPrimaryAreaState };
