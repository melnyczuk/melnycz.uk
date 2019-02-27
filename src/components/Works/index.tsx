import * as React from "react";

import { WorksType } from '../../store/types';


interface WorksVals {
  works: WorksType;
  filter?: string;
}

interface WorksFuncs {
  children: (namespace: string) => JSX.Element;
}

interface WorksProps extends WorksVals, WorksFuncs {}

class Works extends React.PureComponent<WorksProps> {
  render() {
    const { works, filter, children } = this.props;
    return (
      <div className="works">
        {
          Object.keys(works).map(
            (key, i) => {

              const { namespace } = works[key];

              const typeHasFilter = filter
                ? works[key].type.includes(filter)
                : true;

              return (
                works.hasOwnProperty(key) &&
                typeHasFilter &&
                <section key={i}>
                  {children(namespace)}
                </section>
              );
            },
          )
        }
      </div>
    )
  }
}

export { 
  Works,
  WorksProps,
  WorksVals,
  WorksFuncs, 
};