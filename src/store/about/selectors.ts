import { createSelector } from "reselect";

import {
  StoreType,
  AboutType,
  InfoType,
} from "../../types";

function selectAbout({ about }: StoreType): AboutType {
  return about;
}

const selectBio = createSelector(
  [selectAbout],
  ({ bio = null }: AboutType): string[] => bio,
);

const selectInfo = createSelector(
  [selectAbout],
  ({ info }: AboutType): InfoType => info
);

const selectTitle = createSelector(
  [selectAbout],
  ({ title }: AboutType): string => title
);

const selectImage = createSelector(
  [selectAbout],
  ({ img }: AboutType): string => img
);

export {
  selectAbout,
  selectBio,
  selectImage,
  selectInfo,
  selectTitle,
}
