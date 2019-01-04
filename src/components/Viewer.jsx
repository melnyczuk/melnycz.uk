import React, { PureComponent } from 'react';
import makeClassesClassName from '../utils';

export const DEFAULT_VIEWER_CLASS = 'viewer';

class Viewer extends PureComponent {
  render() {
    const { classes = [], children = [] } = this.props;
    const viewerClasses = makeClassesClassName(classes, DEFAULT_VIEWER_CLASS);
    return <div className={viewerClasses}>{ children }</div>;
  }
}

export default Viewer;
