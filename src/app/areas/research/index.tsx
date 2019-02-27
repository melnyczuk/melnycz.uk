import * as React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../../store/types';
import { setTitle } from '../../../store/about/about.actions';

interface ResearchVals {
  className: string;
}

interface ResearchFuncs {
  updateTitle: (title: string) => void;
}

interface ResearchProps extends ResearchVals, ResearchFuncs {}

class Research extends React.PureComponent <ResearchProps> {

  constructor(props: ResearchProps) {
    super(props);
  }

  render() {
    const { updateTitle } = this.props;
    
    updateTitle('Research');
    
    return (<h1>TODO</h1>);
  }
}

export default connect<ResearchVals, ResearchFuncs, {}>(
  (state: StoreType) => ({
    className: '',
  }),
  (dispatch: Function) => ({
    updateTitle: (title: string) => dispatch(setTitle(title)),
  })
)(Research);