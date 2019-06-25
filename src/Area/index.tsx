import React, { useEffect } from 'react';

import { WorkType } from '../types';
import Work from './Work';

interface AreaVals {
  works: WorkType[];
  match?: {
    params?: {
      area: string;
    }
  }
}
interface AreaFuncs {
  updateActive: (active: string) => void;
}
interface AreaProps extends AreaVals, AreaFuncs {}

const Area: React.FunctionComponent<AreaProps> =
  ({ match, works, updateActive }) => {

    const {
      params: {
        area = 'home'
      },
    } = match;

    useEffect(()=> { updateActive(area) });

    return (
      <div className={area}>
        {
          works.map(
            ({ namespace }) =>
              (<Work key={namespace} namespace={namespace} />)
          )
        }
      </div>
    );
  }

export { Area, AreaVals, AreaFuncs, AreaProps }
