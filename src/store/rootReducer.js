import { combineReducers } from 'redux';
import areas from './areas/areas.reducer';

const rootReducer = combineReducers({
  areas
});

export default rootReducer;

