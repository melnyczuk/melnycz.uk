import { createSelector } from "reselect";

import {
  StoreType,
  AboutType,
  InfoType,
  MediaIndexType,
  ImageType,
} from "../../types";

import { selectImageArray, filterMedia } from "../media/selectors";

import { selectNamespace } from "../portfolio/selectors";

const selectAbout = ({ about }: StoreType): AboutType => about;

const selectDescription = createSelector(
  [selectAbout],
  ({ description = null }: AboutType): string[] => description
);

const selectInfo = createSelector(
  [selectAbout],
  ({ info }: AboutType): InfoType => info
);

const selectTitle = createSelector(
  [selectAbout],
  ({ title }: AboutType): string => title
);

const selectVisible = createSelector(
  [selectAbout],
  ({ visible = false }: AboutType): boolean => visible,
);

const selectMediaIndicies = createSelector(
  [selectAbout],
  ({ media = null }: AboutType): MediaIndexType => media
);

const selectMedia = {
  index: createSelector(
    [selectAbout],
    ({ media = null }: AboutType): MediaIndexType => media,
  ),

  punctum: createSelector(
    [selectImageArray, selectNamespace, selectMediaIndicies],
    (images: ImageType[], namespace: string, { punctum }): ImageType =>
      images.filter(filterMedia(namespace, [punctum]))[0]
  ),
};

export {
  selectAbout,
  selectDescription,
  selectInfo,
  selectTitle,
  selectMedia,
  selectVisible,
}
