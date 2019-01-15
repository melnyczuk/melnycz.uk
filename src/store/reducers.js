import { combineReducers } from 'redux';
import viewers from './reducers/viewers.reducer';

const rootReducer = combineReducers({
  viewers
});

export default rootReducer;

