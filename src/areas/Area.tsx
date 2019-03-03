import * as React from 'react';
import { Route } from 'react-router-dom';

import './areas.scss';

interface AreaVals {
  area: string;
  title: string;
  component: any;
}

interface AreaFuncs {
  updateTitle: (title: string) => void;
}

interface AreaProps extends AreaVals, AreaFuncs { }

class Area extends React.PureComponent<AreaProps> {

  constructor(props: AreaProps) {
    super(props);
  }

  componentDidMount() {
    const { updateTitle, title } = this.props;
    updateTitle(title);
  }

  componentDidUpdate() {
    const { updateTitle, title } = this.props;
    updateTitle(title);
  }

  render() {
    const { area, component } = this.props;
    return (
      <>
        <main className="main">
          <Route exact path={`/${area}`} component={component} />
          <Route path={`/${area}/:filter`} component={component} />
        </main>
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