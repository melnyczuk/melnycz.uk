import { createSelector } from "reselect";

import { 
  StoreType, 
  AboutType, 
  InfoType,
  BioType, 
} from "../../types";

function selectAbout({ about }: StoreType): AboutType {
  return about;
}

const selectBio = createSelector(
  selectAbout,
  ({ bio }: AboutType): BioType => bio
);

const selectInfo = createSelector(
  selectAbout,
  ({ info }: AboutType): InfoType => info
);

const selectStatement = createSelector(
  selectAbout,
  ({ statement }: AboutType): string[] => statement
);

const selectTitle = createSelector(
  selectAbout,
  ({ title }: AboutType): string => title
);

export {
  selectAbout,
  selectBio,
  selectInfo,
  selectStatement,
  selectTitle,
}
