import { createSelector } from "reselect";

import { 
  StoreType, 
  AboutType, 
  InfoType, 
} from "../../types";

function selectAbout(state: StoreType): AboutType {
  return state.about;
}

const selectBio = createSelector(
  selectAbout,
  (about: AboutType): string[] => about.bio
);

const selectInfo = createSelector(
  selectAbout,
  (about: AboutType): InfoType => about.info
);

const selectStatement = createSelector(
  selectAbout,
  (about: AboutType): string[] => about.statement
);

const selectTitle = createSelector(
  selectAbout,
  (about: AboutType): string => about.title
);

export {
  selectAbout,
  selectBio,
  selectInfo,
  selectStatement,
  selectTitle,
}
