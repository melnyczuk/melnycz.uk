import { combineReducers } from 'redux';
import main from './areas/main.reducers';

const areas = combineReducers({
  main
});

export default areas;
