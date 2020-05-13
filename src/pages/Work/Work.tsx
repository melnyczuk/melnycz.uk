import React, { FC } from 'react';

import { works as worksDb } from '../../../static/db/works.json';

import { filterWorks } from '../../utils';

import Post from '../../components/Post';

interface WorkProps {
  namespace: string;
}

const Work: FC<WorkProps> = ({ namespace }) => {
  const { title, media } = filterWorks(worksDb)('portfolio')(namespace);
  return <Post namespace={namespace} title={title} imgs={media?.images} />;
};

export default Work;
