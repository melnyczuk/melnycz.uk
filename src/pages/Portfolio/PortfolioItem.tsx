import React, { FC } from 'react';

import { media as mediaDb } from '../../../static/db/media.json';

import { WorkType } from '../../types';
import { filterMediaByNamespace, imageTypeCompletionFunc } from '../../utils';

import Punctum from '../../components/Punctum';

const { images } = mediaDb;

const PortfolioItem: FC<WorkType> = ({ live, namespace, title, media }) => {
  const namespaceImages = images
    .map(imageTypeCompletionFunc)
    .filter(filterMediaByNamespace(namespace));

  const punctum =
    media.punctum &&
    media.punctum.map(
      (p) => namespaceImages.filter(({ index }) => index === p)[0]
    )[0];

  return !live ? null : (
    <Punctum
      area="portfolio"
      image={punctum}
      namespace={namespace}
      title={title}
    />
  );
};

export default PortfolioItem;
