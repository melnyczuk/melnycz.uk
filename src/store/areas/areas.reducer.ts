import { combineReducers } from 'redux';
import primary from './primary/primary.reducer';

const areas = combineReducers({
  primary,
});

export default areas;
