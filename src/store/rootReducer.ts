import { combineReducers } from 'redux';

import active from './active/active.reducer';
import about from './about/about.reducer';
import media from './media/media.reducer';
import nav from './nav/nav.reducer';
import portfolio from './portfolio/portfolio.reducer';

const rootReducer = combineReducers({
  active,
  about,
  media,
  nav,
  portfolio,
});

export default rootReducer;
