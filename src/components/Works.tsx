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

const mediaTypeCompletionFunc:
(type: string) => (image: Partial<ImageType>) => ImageType
  = addBaseUrlAndTypeToMediaItem(baseUrl);

const imageTypeCompletionFunc:
(image: Partial<ImageType>) => ImageType
  = mediaTypeCompletionFunc('images');

export default ({ area }: Props): JSX.Element => {
  const works: WorkType[] = useMemo(
    () => filterWorks(worksDb)(area),
    [worksDb, area],
  );

  return (
    <>
      {
        works.filter(({ live }): boolean => live)
          .map(({ namespace, title, media }: WorkType): JSX.Element => {
            const namespaceImages: ImageType[] = images
              .map(imageTypeCompletionFunc)
              .filter(filterMediaByNamespace(namespace));

            const punctum: ImageType = media.punctum && media.punctum
              .map(p => namespaceImages
                .filter(({ index }) => index === p)[0],
              )[0];

            return (
              <Punctum
                key={`work-${area}-${namespace}`}
                area={area}
                image={punctum}
                namespace={namespace}
                title={title}
              />
            );
          })
      }
    </>
  );
};

export { mediaTypeCompletionFunc, imageTypeCompletionFunc };
