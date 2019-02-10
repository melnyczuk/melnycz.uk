import { combineReducers } from 'redux';
import areas from './areas/areas.reducer';
import works from './works/works.reducer';

const rootReducer = combineReducers({
  areas,
  works,
});

export default rootReducer;
