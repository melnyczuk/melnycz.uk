import { useMemo } from 'react';
import Punctum from './Punctum';
import { WorkType, ImageType } from '../types';
import { works as worksDb } from '../../static/db/works.json';
import { media as mediaDb } from '../../static/db/media.json';
import {
  filterMediaByNamespace,
  addBaseUrlAndTypeToMediaItem,
  filterWorks,
} from '../utils';

const { baseUrl, images } = mediaDb;

export interface Props { area: string }

export default ({ area }: Props) => {
  const mediaTypeCompletionFunc = addBaseUrlAndTypeToMediaItem(baseUrl);
  const imageTypeCompletionFunc = mediaTypeCompletionFunc('images');
  const works = useMemo(() => filterWorks(worksDb)(area), [worksDb, area]);
  return (
    <>
      {
        works.filter(({ live }) => live)
          .map(({ namespace, title, media }: WorkType) => {
            const namespaceImages = images
              .map(imageTypeCompletionFunc)
              .filter(filterMediaByNamespace(namespace));

            const punctum = media.punctum && media.punctum
              .map(p => namespaceImages
                .filter(({ index }) => index === p)[0]
              )[0] as ImageType;

            return (
              <Punctum
                key={`work-${area}-${namespace}`}
                area={area}
                image={punctum}
                namespace={namespace}
              />
            );
          })
      }
    </>
  );
};
