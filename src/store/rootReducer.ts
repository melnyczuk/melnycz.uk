import { combineReducers } from 'redux';

import areas from './areas/areas.reducer';
import media from './media/media.reducer';
import nav from './nav/nav.reducer';
import works from './works/works.reducer';

const rootReducer = combineReducers({
  areas,
  media,
  nav,
  works,
});

export default rootReducer;
