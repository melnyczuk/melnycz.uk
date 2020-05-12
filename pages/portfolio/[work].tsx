import React, { useMemo, FC } from 'react';
import { useRouter } from 'next/router';
import App from '../../src/components/App';
import Post from '../../src/components/Post';
import {
  filterWorks,
  filterMediaByNamespace,
  addBaseUrlAndTypeToMediaItem,
} from '../../src/utils';
import { media as mediaDb } from '../../static/db/media.json';
import { works as worksDb } from '../../static/db/works.json';
import { ImageType, MediaDBItemType } from '../../src/types';

const { baseUrl, images } = mediaDb;

// eslint-disable-next-line react/display-name
const Work: FC = () => {
  const { area, namespace } = useRouter().query as {
    area: string;
    namespace: string;
  };

  if (!area || !namespace) return null;

  const imageTypeCompletionFunc: (
    mediaItem: MediaDBItemType
  ) => ImageType = addBaseUrlAndTypeToMediaItem(baseUrl)('images');

  const work = useMemo(
    () =>
      filterWorks(worksDb)(area).filter((w) => w.namespace === namespace)[0],
    [worksDb, area, namespace]
  );

  const imgs: ImageType[] = useMemo(
    () =>
      work.media.images.map(
        (i) =>
          images
            .map(imageTypeCompletionFunc)
            .filter(filterMediaByNamespace(namespace))
            .filter(({ index }) => i === index)[0]
      ),
    [images]
  );

  return (
    <App page={area}>
      <Post namespace={namespace} title={work.title} images={imgs} />
    </App>
  );
};

export default Work;
