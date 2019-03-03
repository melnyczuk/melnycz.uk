import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import './base.scss';

import rootReducer from './store/rootReducer';

import { 
  HomeContainer,
  PortfolioContainer,
  ResearchContainer,
} from './areas/areas.containers';

import {
  MainNavContainer,
  SiteTitleContainer
} from './app.containers';

import { SubNavContainer } from './areas/areas.containers';

class App extends React.PureComponent {

  private store: any;

  constructor(props: any) {
    super(props);
    this.store = createStore(rootReducer);
  }

  render() {
    return (
      <Provider store={this.store} >
        <BrowserRouter>
          <div className="app">
            <div className="header">
              <SiteTitleContainer />
              <MainNavContainer />
              <SubNavContainer />
            </div>
            <Route
              className="home"
              path='/'
              component={HomeContainer}
            />
            <Route
              className="portfolio"
              path='/portfolio'
              component={PortfolioContainer}
            />
            <Route
              className="research"
              path='/research'
              component={ResearchContainer}
            />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
