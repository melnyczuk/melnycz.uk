import { createSelector } from 'reselect';
import { StoreType, WorkType, MediaIndexType, ImageType, AVType, ContainerType } from '../../types';
import selectMedia from './media';
import selectRoot from './root';
import { filterMedia } from '../../utils';

const selectNamespace =
  (state: StoreType, { namespace }: ContainerType): string =>
    namespace;

const selectWork = createSelector(
  [selectRoot.works, selectNamespace],
  (works: WorkType[], name: string): WorkType =>
    works.filter(({ namespace: namespace }: WorkType): Boolean =>
      namespace === name)[0]
);

const selectArea = createSelector(
  [selectWork],
  ({ area }) =>
    area
);

const selectYear = createSelector(
  [selectWork],
  ({ year }) =>
    year
);

const selectTags = createSelector(
  [selectWork],
  ({ tags }) =>
    tags
);

const selectDescription = createSelector(
  [selectWork],
  ({ description = null }): string[] =>
    description,
);

const selectVisible = createSelector(
  [selectWork],
  ({ visible = false }): boolean =>
    visible,
);

const selectTitle = createSelector(
  [selectWork],
  ({ title }): string =>
    title,
);

const selectMediaIndicies = createSelector(
  [selectWork],
  ({ media = null }: WorkType): MediaIndexType => media,
);

const selectPunctum = createSelector(
  [selectMedia.images, selectNamespace, selectMediaIndicies],
  (images: ImageType[], namespace: string, { punctum }): ImageType =>
    images.filter(filterMedia([punctum])(namespace))[0]
);

const selectImages = createSelector(
  [selectMedia.images, selectNamespace, selectMediaIndicies],
  (imgs: ImageType[], namespace: string, { images }): ImageType[] =>
    imgs.filter(filterMedia(images)(namespace))
);

const selectVideos = createSelector(
  [selectMedia.videos, selectNamespace, selectMediaIndicies],
  (vids: AVType[], namespace: string, { videos }): AVType[] =>
    vids.filter(filterMedia(videos)(namespace))
);

const selectAudios = createSelector(
  [selectMedia.audios, selectNamespace, selectMediaIndicies],
  (auds: AVType[], namespace: string, { audios }): AVType[] =>
    auds.filter(filterMedia(audios)(namespace))
);

export default {
  area: selectArea,
  namespace: selectNamespace,
  title: selectTitle,
  year: selectYear,
  tags: selectTags,
  description: selectDescription,
  visible: selectVisible,
  media: {
    punctum: selectPunctum,
    images: selectImages,
    videos: selectVideos,
    audios: selectAudios,
  },
}
