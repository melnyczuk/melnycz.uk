import React, { useEffect } from 'react';

import './areas.scss';
import { WorkType } from '../types';
import Work from './Works/Work';

interface AreaVals { works: WorkType[]; }
interface AreaFuncs { updateActive: (active: string) => void; }
interface AreaProps extends AreaVals, AreaFuncs { label: string; }

const Area: React.FunctionComponent<AreaProps> =
  ({ label, works, updateActive }) => {
    useEffect(()=> { updateActive(label) });
    return (
      <div className={label}>
        {works.map(({ namespace }) => (<Work namespace={namespace} />))}
      </div>
    );
  }

export { Area, AreaVals, AreaFuncs, AreaProps }
