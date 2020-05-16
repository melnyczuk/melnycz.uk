import React, { FC } from 'react';

import { DynamicPageProps } from '../../hoc/DynamicPage';
import { works as worksDb } from '../../../static/db/works.json';

import { filterWorks } from '../../utils';

import Post from '../../components/Post';

const Work: FC<DynamicPageProps> = ({ namespace }) => {
  const { title, media } = filterWorks(worksDb)('portfolio')(namespace);
  return <Post namespace={namespace} title={title} imgs={media?.images} />;
};

export default Work;
