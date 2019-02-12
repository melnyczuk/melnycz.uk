import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NavBar from './areas/Nav.App';
import Areas from './areas/Areas';

import rootReducer from '../store/rootReducer';

import { Route, BrowserRouter } from 'react-router-dom';
// import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import Portfolio from './areas/portfolio/Portfolio';

const store = createStore(rootReducer);

const App = () => {
  if (!store) return (<h1>Loading...</h1>);
  return (<Provider store={store} >
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route component={() => (<div />)} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/research' render={() => (<h1>TODO</h1>)} />
      </div>
    </BrowserRouter>
  </Provider>);
};

export default App;
