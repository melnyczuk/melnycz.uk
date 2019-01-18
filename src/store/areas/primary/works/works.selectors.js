import { createSelector } from 'reselect';

const getWorkStateForNameSpace = (state, { namespace }) => {
  return state.areas.primary.works[namespace];
}

const getWorkModalVisibility = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.visible) ? state.visible : ''
);

const getWorkPostTitle = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.title) ? state.title : ''
);

const getWorkPunctumAltText = createSelector(
  getWorkStateForNameSpace,
  state => (state && state.alt) ? state.alt : ''
);

const getWorkPunctumSource = createSelector(
  getWorkStateForNameSpace,
  state =>  (state && state.src) ? state.src : ''
);

export {
  getWorkModalVisibility,
  getWorkPostTitle,
  getWorkPunctumAltText,
  getWorkPunctumSource
}
