import { combineReducers } from 'redux';
import areas from './app/areas/areas.reducer';

const rootReducer = combineReducers({
  areas,
});

export default rootReducer;

