import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { works as worksDb } from '../../../static/db/works.json';

import { filterWorks } from '../../utils';

import App from '../../components/App';
import Post from '../../components/Post';

const Work: FC = () => {
  const { work: namespace } = useRouter().query as { work: string };

  if (!namespace) return null;

  const { title, media } = filterWorks(worksDb)('portfolio').find(
    (w) => w.namespace === namespace
  );

  return (
    <App page="portfolio">
      <Post namespace={namespace} title={title} imgs={media?.images} />
    </App>
  );
};

export default Work;
