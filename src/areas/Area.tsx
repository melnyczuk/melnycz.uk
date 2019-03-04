import * as React from 'react';
import { Route } from 'react-router-dom';

import './areas.scss';

interface AreaVals {
  area: string;
  title: string;
  component: any;
}

interface AreaFuncs {
  updateActive: (active: string) => void;
}

interface AreaProps extends AreaVals, AreaFuncs { }

class Area extends React.PureComponent<AreaProps> {

  constructor(props: AreaProps) {
    super(props);
  }

  componentDidMount() {
    const { updateActive, title } = this.props;
    updateActive(title);
  }

  componentDidUpdate() {
    const { updateActive, title } = this.props;
    updateActive(title);
  }

  render() {
    const { area, component } = this.props;
    return (
      <>
        <Route exact path={`/${area}`} component={component} />
        <Route path={`/${area}/:filter`} component={component} />
      </>
    );
  }
}

export {
  AreaVals,
  AreaFuncs,
  AreaProps,
  Area,
}