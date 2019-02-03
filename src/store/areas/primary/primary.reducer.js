import { combineReducers } from 'redux';
import initialState from '../../initialState';
import works from './works/works.reducer';

const { baseBinUrl } = initialState.areas.primary;

const primary = combineReducers({
  baseBinUrl: () => baseBinUrl,
  works,
});

export default primary;
