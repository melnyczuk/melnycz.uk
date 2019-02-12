import { combineReducers } from 'redux';

import media from './media/media.reducer';
import navs from './nav/nav.reducer';
import works from './works/works.reducer';

const rootReducer = combineReducers({
  media,
  navs,
  works,
});

export default rootReducer;
