import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.scss';

import rootReducer from '../store/rootReducer';

import Home from './Home';
import Portfolio from './Portfolio';
import Research from './Research';

import { 
  MainNavContainer, 
  SiteTitleContainer 
} from './app.containers';

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
            <MainNavContainer />
            <main>
              <Route path='/' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/research' component={Research} />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
