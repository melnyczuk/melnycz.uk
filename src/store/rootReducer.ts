import { combineReducers } from 'redux';

import about from './about/about.reducer';
import media from './media/media.reducer';
import nav from './nav/nav.reducer';
import works from './works/works.reducer';

const rootReducer = combineReducers({
  about,
  media,
  nav,
  works,
});

export default rootReducer;
