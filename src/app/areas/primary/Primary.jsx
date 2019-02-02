import React from 'react';
import Work from './works/Work';

export const PrimaryArea = ({ works = [] }) => (
  <main className='main primary'>
    {Object.keys(works).map(
      (key, i) => {
        const { namespace = undefined } = works[key];
        return (namespace && <Work key={i} namespace={namespace} />);
      }
    )}
  </main>
);