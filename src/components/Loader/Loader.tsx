import React, { PropsWithChildren } from 'react';

interface LoaderProps<T> {
  waitOn: T[];
}

function Loader<T>({
  waitOn,
  children = null,
}: PropsWithChildren<LoaderProps<T>>): JSX.Element {
  const ready = !!waitOn && waitOn.every((item: T): boolean => !!item);
  return <>{ready ? children : 'Loading...'}</>;
}

export default Loader;
