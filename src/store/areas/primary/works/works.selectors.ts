import { createSelector } from 'reselect';

import {
  selectWorks,
  selectBinBaseUrl,
} from '../primary.selectors';

const selectWorkStateForNameSpace = (state, { namespace }) => selectWorks(state)[namespace];

const selectWorkMediaFromState = createSelector(
  selectWorkStateForNameSpace,
  work => ((work && work.media) ? work.media : null),
);

const selectWorkDescriptionFromState = createSelector(
  selectWorkStateForNameSpace,
  state => ((state && state.description) ? state.description : null),
);

const modal = {

  selectVisible: createSelector(
    selectWorkStateForNameSpace,
    work => ((work && work.visible) ? work.visible : false),
  ),

};

const portal = {

  selectImages: createSelector(
    selectWorkMediaFromState,
    media => ((media && media.images) ? media.images : null),
  ),

  selectBinBaseUrl,

};

const post = {

  selectLong: createSelector(
    selectWorkDescriptionFromState,
    desc => ((desc && desc.long) ? desc.long : false),
  ),

  selectShort: createSelector(
    selectWorkDescriptionFromState,
    desc => ((desc && desc.short) ? desc.short : null),
  ),

  selectExpand: createSelector(
    selectWorkDescriptionFromState,
    desc => ((desc && desc.expand) ? desc.expand : false),
  ),

  selectTitle: createSelector(
    selectWorkStateForNameSpace,
    work => ((work && work.title) ? work.title : null),
  ),

};

const punctum = {

  selectAlt: createSelector(
    selectWorkStateForNameSpace,
    state => ((state && state.alt) ? state.alt : null),
  ),

  selectSrc: createSelector(
    [selectWorkStateForNameSpace, selectBinBaseUrl],
    (state, baseBinUrl) => ((state && baseBinUrl && state.src)
      ? `${baseBinUrl}/${state.src}`
      : null),
  ),

};

export {
  modal,
  portal,
  post,
  punctum,
};
