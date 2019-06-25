import { combineReducers } from 'redux';

import active from './active/reducer';
import media from './media/reducer';
import nav from './nav/reducer';
import works from './works/reducer';

export default combineReducers({ active, media, nav, works });
