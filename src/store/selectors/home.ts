import { createSelector } from 'reselect';
import { ImageType } from '../../types';
import selectRoot from './root';

const selectImage = createSelector(
  [selectRoot.media],
  (media): ImageType =>
    media.images[Math.floor(Math.random() * media.images.length)],
);

export default { image: selectImage };
