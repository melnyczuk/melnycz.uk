import React, { useMemo } from 'react';

import Punctum from './Punctum';

import { WorkType, ImageType } from '../types';

import { works as worksDb } from '../static/db/works.json';
import { media } from '../static/db/media.json';
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
  const works = useMemo(() => filterWorks(worksDb)(area), [worksDb, area]);
  return (
    <main>
      {
        works.map(({ namespace, media: { punctum: index, images: indices } }) => {
          const namespaceImages = images
            .map(imageTypeCompletionFunc)
            .filter(filterMediaByNamespace(namespace)) as ImageType[];
            
          const imgs = namespaceImages.filter(filterMediaByIndices(indices));
          const punctum = namespaceImages.filter(filterMediaByIndices([index]))[0];

          return (
            <Punctum
              key={`work-${area}-${namespace}`}
              namespace={namespace}
              punctum={punctum}
              images={imgs}
            />
          );
        })
      };
    </main>
  );
}