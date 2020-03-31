import React from 'react';
import { useRouter } from 'next/router';
import App from '../src/components/App';
import Works from '../src/components/Works';

// eslint-disable-next-line react/display-name
export default () => {
  const { area } = useRouter().query as { area: string };
  return !area ? null : (
    <App page={area}>
      <Works area={area} />
    </App>
  );
};
