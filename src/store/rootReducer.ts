import { combineReducers } from 'redux';
import { ActionType } from '../types';

import about from './about/about.reducer';
import media from './media/media.reducer';
import nav from './nav/nav.reducer';
import works from './works/works.reducer';

const filter = (filter: string = null, action: ActionType) => {
  if (!action) return filter;
}

const rootReducer = combineReducers({
  about,
  media,
  nav,
  works,
  filter: null,
});

export default rootReducer;
