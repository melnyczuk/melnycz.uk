import { createSelector } from 'reselect';

const getWorkStateForNameSpace = (state, { namespace }) => {
  return state.areas.primary.works[namespace];
}

const getWorkModalVisibility = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.visible) ? state.visible : false
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
  state =>  (state && state.src) ? state.src : null
);

export {
  getWorkModalVisibility,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource
}
