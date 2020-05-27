import React, { FC } from 'react';

import { root } from '../../../static/info.json';
import { DynamicPageProps } from '../../hoc/DynamicPage';
import { Work } from '../../models';
import { fetchData } from '../../utils';

import Loader from '../../components/Loader';
import Post from '../../components/Post';

const WorkComponent: FC<DynamicPageProps> = ({ namespace }) => {
  const path = `${root}/works/${namespace}`;
  const { value } = fetchData<Work>(`${path}/data.json`);

  return (
    <Loader waitOn={[value]}>
      <Post path={`${root}/works/${namespace}`} work={value} />
    </Loader>
  );
};

export default WorkComponent;
