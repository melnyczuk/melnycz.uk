import * as React from 'react';
import { connect } from 'react-redux';

import { setTitle } from '../../../store/about/about.actions';

import { StoreType } from '../../../store/types';

interface HomeVals {
  className: string;
}

interface HomeFuncs {
  updateTitle: (title: string) => void;
}

interface HomeProps extends HomeVals, HomeFuncs {}

class Home extends React.PureComponent <HomeProps> {

  constructor(props: HomeProps) {
    super(props);
  }
  
  render() {
    const { updateTitle } = this.props;

    updateTitle('hi');

    return (<div />);
  }
}

export default connect<HomeVals, HomeFuncs, {}>
(
  (state: StoreType) => ({
    className: '',
  }),
  (dispatch: Function) => ({
    updateTitle: (title: string) => dispatch(setTitle(title)),
  })
)(Home);