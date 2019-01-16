import { combineReducers } from 'redux';
import areas from './reducers/areas.reducer';

const rootReducer = combineReducers({
  areas
});

export default rootReducer;

