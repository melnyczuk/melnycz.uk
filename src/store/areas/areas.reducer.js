import { combineReducers } from 'redux';
import primary from './primary/primary.reducers';

const areas = combineReducers({
  primary
});

export default areas;
