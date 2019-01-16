import { combineReducers } from 'redux';
import works from './works/works.reducer';

const main = combineReducers({
  works
});

export default main;
