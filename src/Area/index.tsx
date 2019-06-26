import React, { useEffect } from 'react';

import './area.scss';
import { WorkType } from '../types';
import Work from './Work';

interface AreaVals {
  works: WorkType[];
  match?: {
    params?: {
      area: string;
    };
  };
}
interface AreaFuncs {
  updateActive: (active: string) => void;
}
interface AreaProps extends AreaVals, AreaFuncs {}

const getClass = (area: string): string => `area area__${area}`;

const Area: React.FunctionComponent<AreaProps> =
  ({ match, works, updateActive }) => {
    const {
      params: {
        area = 'home',
      },
    } = match;

    useEffect((): void => { updateActive(area); });

    return (
      <div className={getClass(area)}>
        {
          works.map(
            ({ namespace }) =>
              (<Work key={namespace} namespace={namespace} />),
          )
        }
      </div>
    );
  };

export { Area, AreaVals, AreaFuncs, AreaProps };
