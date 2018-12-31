import React, { PureComponent } from 'react';
import makeClassesClassName from '../utils';

const DEFAULT_VIEWER_CLASS = 'viewer';

class Viewer extends PureComponent {
  constructor(props){
    super(props);
    this.getClassName = this.getClassName.bind(this);
  }

  getClassName(classes = []){
    return makeClassesClassName(classes, DEFAULT_VIEWER_CLASS)
  }

  render() {
    const { classes } = this.props;
    const className = this.getClassName(classes);
    return (<div className={className}></div>);
  }
}

export default Viewer;
