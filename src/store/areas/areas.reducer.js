import { combineReducers } from 'redux';
import works from './primary/works/works.reducer';

const areas = combineReducers({
  primary: combineReducers({ works }),
});

export default areas;
