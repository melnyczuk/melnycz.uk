import { combineReducers } from 'redux';
import works from './works/works.reducer';

const rootReducer = combineReducers({
  works,
});

export default rootReducer;
