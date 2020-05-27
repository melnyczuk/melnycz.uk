import React, { FC } from 'react';

import { root, works } from '../../../static/info.json'; 

import { Work } from '../../models';
import { fetchData } from '../../utils';

import Loader from '../../components/Loader';
import Punctum from '../../components/Punctum';

const Portfolio: FC = () => {
  const worksData = works
    .map(work => `${root}/works/${work}`)
    .map(path => fetchData<Work>(`${path}/data.json`).value);

  return (
    <Loader waitOn={worksData}>
      {
        worksData.map((work, i) => {
          const namespace = works[i];
          return (
            <Punctum 
              key={namespace}
              href={`portfolio/${namespace}`} 
              path={`${root}/works/${namespace}`} 
              work={work} 
            />
          );
        })
      }
    </Loader>
  );
};

export default Portfolio;
