import { combineReducers } from 'redux';

import active from './active/reducer';
import about from './about/reducer';
import media from './media/reducer';
import nav from './nav/reducer';
import portfolio from './portfolio/reducer';

const rootReducer = combineReducers({
  active,
  about,
  media,
  nav,
  portfolio,
});

export default rootReducer;
