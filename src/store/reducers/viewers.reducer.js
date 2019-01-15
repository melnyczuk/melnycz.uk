import { combineReducers } from 'redux';
import main from './viewers/main.reducers';

const viewers = combineReducers({
  main
});

export default viewers;
