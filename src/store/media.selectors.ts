import { createSelector, } from 'reselect';
import { StoreState, Media, Image, Video, Audio, } from './store';

function selectMedia(state: StoreState): Media {
  return state.media;
}

const selectBinBaseUrl = createSelector(
  selectMedia,
  (media: Media): string => (
    media.baseBinUrl ? media.baseBinUrl : null
  ),
);

const selectImages = createSelector(
  selectMedia,
  (media: Media): Array<Image> => (
    media.images ? media.images : null
  ), 
);

const selectVideos = createSelector(
  selectMedia,
  (media: Media): Array<Video> => (
    media.videos ? media.videos : null
  ), 
);

const selectAudios = createSelector(
  selectMedia,
  (media: Media): Array<Audio> => (
    media.audios ? media.audios : null
  ), 
);

export {
  selectBinBaseUrl,
  selectAudios,
  selectVideos,
  selectImages,
}