import React, { FC } from 'react';

import { media as mediaDb } from '../../../static/db/media.json';
import { works } from '../../../static/db/works.json';

import { filterMediaByNamespace, imageTypeCompletionFunc } from '../../utils';

import { WorkType } from '../../types';

import Punctum from '../../components/Punctum';

const PortfolioItem: FC<WorkType> = ({ live, namespace, title, media }) => {
  const namespaceImages = mediaDb
    .images
    .map(imageTypeCompletionFunc)
    .filter(filterMediaByNamespace(namespace));

  const punctum =
    media.punctum?.map(
      (p) => namespaceImages.filter(({ index }) => index === p)[0]
    )[0];

  return !live ? null : (
    <Punctum
      href={`portfolio/${namespace}`}
      image={punctum}
      title={title}
    />
  );
};

const Portfolio: FC = () => (<>{works.map(PortfolioItem)}</>);

export default Portfolio;
