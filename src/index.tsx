import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import './base.scss';

import rootReducer from './store/rootReducer';
import { NavContainer, SiteTitleContainer } from './containers';
import { AreaContainer } from './areas/containers';

const areas = ['about', 'portfolio'];

const App: React.FunctionComponent<any> =
  ({store = createStore(rootReducer)}) => (
    <Provider store={store} >
      <HashRouter>
        <div className="app">
          <div className="header">
            <SiteTitleContainer />
            <NavContainer />
          </div>
          <main className="main">
            <Route exact path='/' render={() => (<AreaContainer label='home' />)} />
            {
              areas.map((route) => (
                <Route key={route} path={`/${route}`}
                  render={() => (<AreaContainer label={route}/>)}
                />
              ))
            }
          </main>
        </div>
      </HashRouter>
    </Provider>
  );

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
