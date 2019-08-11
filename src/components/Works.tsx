import { useMemo } from 'react';
import Punctum from './Punctum';
import { WorkType, ImageType } from '../types';
import { works as worksDb } from '../../static/db/works.json';
import { media } from '../../static/db/media.json';
import {
  filterMediaByIndices,
  filterMediaByNamespace,
  addBaseUrlAndTypeToPartialMediaItem,
  filterWorks,
} from '../utils';

const { baseUrl, images } = media;

export interface Props { area: string; };

export default ({ area }: Props) => {
  const mediaTypeCompletionFunc = addBaseUrlAndTypeToPartialMediaItem(baseUrl);
  const imageTypeCompletionFunc = mediaTypeCompletionFunc('images');
  const works = useMemo(() => filterWorks(worksDb)(area), [worksDb, area]) as WorkType[];
  return (
    <main>
      {
        works.map(({ namespace, title, media: { punctum: punctIndicies, images: imgIndicies } }: WorkType) => {
          const namespaceImages = images
            .map(imageTypeCompletionFunc)
            .filter(filterMediaByNamespace(namespace)) as ImageType[];

          const imgs = namespaceImages.filter(filterMediaByIndices(imgIndicies));
          const punctum = namespaceImages.filter(filterMediaByIndices(punctIndicies))[0];

          return (
            <Punctum
              key={`work-${area}-${namespace}`}
              title={title}
              namespace={namespace}
              punctum={punctum}
              images={imgs}
            />
          );
        })
      }
    </main>
  );
}
