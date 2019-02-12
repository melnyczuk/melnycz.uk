import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { NavContainer, SiteTitleContainer } from './containers';

import rootReducer from '../store/rootReducer';

import { Route, BrowserRouter } from 'react-router-dom';
import Portfolio from './areas/portfolio';

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
          <div className="App">
            <SiteTitleContainer />
            <NavContainer />
            <main>
              <Route component={() => (<div />)} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/research' render={() => (<h1>TODO</h1>)} />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
