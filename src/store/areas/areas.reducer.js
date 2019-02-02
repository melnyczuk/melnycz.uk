import { combineReducers } from 'redux';
import works from './works/works.reducer';

const areas = combineReducers({
  primary: combineReducers({ works }),
});

export default areas;
