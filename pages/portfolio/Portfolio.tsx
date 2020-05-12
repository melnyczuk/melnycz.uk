import React, { FC } from 'react';

import App from '../../src/components/App';
import Punctum from '../../src/components/Punctum';

import { works } from '../../static/db/works.json';
import { media as mediaDb } from '../../static/db/media.json';

import { WorkType } from '../../src/types';
import {
  filterMediaByNamespace,
  addBaseUrlAndTypeToMediaItem,
} from '../../src/utils';

const { baseUrl, images } = mediaDb;

const imageTypeCompletionFunc = addBaseUrlAndTypeToMediaItem(baseUrl)('images');

const Work: FC<WorkType> = ({ live, namespace, title, media }) => {
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

const Portfolio: FC = () => <App page="portfolio">{works.map(Work)}</App>;

export default Portfolio;
