import * as React from 'react';

import {
  PunctumContainer,
  ModalContainer,
  PostContainer,
} from './Works.containers';

import { WorksType } from "../../types";

interface WorkProps {
  namespace: string;
}

function filterWorks(works: WorksType, filter: string): string[] {
  return Object.keys(works).filter(
    (key: string) => (works[key].type.includes(filter))
  );
}

function generateWorks(works: WorksType, keys: string[]): JSX.Element[] {
  return keys.map(
    (key, i) => {
      const { namespace } = works[key];
      return works.hasOwnProperty(key) && <Work key={i} namespace={namespace} />
    }
  )
};

class Work extends React.PureComponent<WorkProps> {

  constructor(props: WorkProps) {
    super(props);
  }

  render() {
    const { namespace } = this.props;

    return (
      <section className='Work' id={namespace}>
        <PunctumContainer namespace={namespace} />
        <ModalContainer namespace={namespace}>
          <PostContainer namespace={namespace} />
        </ModalContainer>
      </section>
    )
  }
}

interface WorksVals {
  works: WorksType;
  match?: {
    params?: {
      filter?: string;
    }
  }
}

interface WorksFuncs {}

interface WorksProps extends WorksVals, WorksFuncs {
  filter?: string;
}

class Works extends React.PureComponent<WorksProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const { works, filter } = this.props;

    const filterKeys: string[] = filter
      ? filterWorks(works, filter)
      : Object.keys(works);

    return generateWorks(works, filterKeys);
  }

}

export {
  WorksVals,
  WorksFuncs,
  WorksProps,
  Works,
}