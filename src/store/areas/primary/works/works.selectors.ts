import { createSelector } from 'reselect';

import {
  selectWorks,
  selectBinBaseUrl,
} from '../primary.selectors';

import {
  StoreState,
  Work,
  Container,
  Description,
  Media,
  Image,
} from '../../../store.d';

const selectWorkStateForNameSpace = (
  state: StoreState,
  { namespace }: Container): Work => (
    selectWorks(state)[namespace]
  );

const selectWorkMediaFromState = createSelector(
  selectWorkStateForNameSpace,
  (work: Work): Media | null => (
    (work && work.media) ? work.media : null
  ),
);

const selectWorkDescriptionFromState = createSelector(
  selectWorkStateForNameSpace,
  (work: Work): Description | null => (
    (work && work.description) ? work.description : null
  ),
);

const modal = {
  selectVisible: createSelector(
    selectWorkStateForNameSpace,
    (work: Work): boolean => (
      (work && work.visible) ? work.visible : false),
  ),
};

const portal = {

  selectBinBaseUrl,

  selectImages: createSelector(
    selectWorkMediaFromState,
    (media: Media): Array<Image> | null => (
      (media && media.images) ? media.images : null
    ),
  ),

};

const post = {

  selectLong: createSelector(
    selectWorkDescriptionFromState,
    (desc: Description): string | null => (
      (desc && desc.long) ? desc.long : null
    ),
  ),

  selectShort: createSelector(
    selectWorkDescriptionFromState,
    (desc: Description): string | null => (
      (desc && desc.short) ? desc.short : null
    ),
  ),

  selectExpanded: createSelector(
    selectWorkDescriptionFromState,
    (desc: Description): boolean => (
      (desc && desc.expanded) ? desc.expanded : false
    ),
  ),

  selectTitle: createSelector(
    selectWorkStateForNameSpace,
    (work: Work): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

};

const punctum = {

  selectAlt: createSelector(
    selectWorkStateForNameSpace,
    (work: Work): string | null => (
      (work && work.title) ? work.title : null
    ),
  ),

  selectSrc: createSelector(
    [selectWorkStateForNameSpace, selectBinBaseUrl],
    (work: Work, baseBinUrl: string): string | null => (
      (work && baseBinUrl && work.src)
        ? `${baseBinUrl}/${work.src}`
        : null
    ),
  ),

};

export {
  modal,
  portal,
  post,
  punctum,
};
