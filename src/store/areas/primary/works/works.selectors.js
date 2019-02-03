import { createSelector } from 'reselect';

import { selectWorks } from '../primary.selectors';

const selectWorkStateForNameSpace = (state, { namespace }) => {
  return selectWorks(state)[namespace];
};

const selectWorkMediaFromState = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.media) ? state.media : null
);

const selectWorkDescriptionFromState = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.description) ? state.description : null
);

const selectWorkModalVisibility = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.visible) ? state.visible : false
);

const selectWorkPortalImages = createSelector(
  selectWorkMediaFromState,
  media => (media && media.images) ? media.images : null
)

const selectWorkPostDescLong = createSelector(
  selectWorkDescriptionFromState,
  desc => (desc && desc.long) ? desc.long : false
);

const selectWorkPostDescShort = createSelector(
  selectWorkDescriptionFromState,
  desc => (desc && desc.short) ? desc.short : null
);

const selectWorkPostShouldExpand = createSelector(
  selectWorkDescriptionFromState,
  desc => (desc && desc.expand) ? desc.expand : false
);

const selectWorkPostTitle = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.title) ? state.title : null
);

const selectWorkPunctumAltText = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.alt) ? state.alt : null
);

const selectWorkPunctumSource = createSelector(
  selectWorkStateForNameSpace,
  state => (state && state.src) ? state.src : null
);

export {
  selectWorkModalVisibility,
  selectWorkPortalImages,
  selectWorkPostDescLong,
  selectWorkPostDescShort,
  selectWorkPostShouldExpand,
  selectWorkPostTitle,
  selectWorkPunctumAltText,
  selectWorkPunctumSource,
}
