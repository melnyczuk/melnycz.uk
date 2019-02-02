import { createSelector } from 'reselect';

const getWorkStateForNameSpace = (state, { namespace }) => {
  return state.areas.primary.works[namespace];
};

const getWorkMediaFromState = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.media) ? state.media : null
);

const getWorkDescriptionFromState = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.description) ? state.description : null
);

const getWorkModalVisibility = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.visible) ? state.visible : false
);

const getWorkPortalImages = createSelector(
  getWorkMediaFromState,
  media => (media && media.images) ? media.images : null
)

const getWorkPostDescLong = createSelector(
  getWorkDescriptionFromState,
  desc => (desc && desc.long) ? desc.long : false
);

const getWorkPostDescShort = createSelector(
  getWorkDescriptionFromState,
  desc => (desc && desc.short) ? desc.short : null
);

const getWorkPostShouldExpand = createSelector(
  getWorkDescriptionFromState,
  desc => (desc && desc.expand) ? desc.expand : false
);

const getWorkPostTitle = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.title) ? state.title : null
);

const getWorkPunctumAltText = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.alt) ? state.alt : null
);

const getWorkPunctumSource = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.src) ? state.src : null
);

export {
  getWorkModalVisibility,
  getWorkPortalImages,
  getWorkPostDescLong,
  getWorkPostDescShort,
  getWorkPostShouldExpand,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource,
}
