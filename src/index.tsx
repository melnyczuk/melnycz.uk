import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import './app.scss';

import {
  NavContainer, SiteTitleContainer, AreaContainer, HomeContainer,
} from './containers';
import { PostContainer } from './Area/containers';

import rootReducer from './store/rootReducer';

const App: React.FunctionComponent<any> =
  ({ store = createStore(rootReducer) }) => (
    <Provider store={store}>
      <HashRouter>
        <div className='app'>
          <div className='header'>
            <SiteTitleContainer />
            <NavContainer />
          </div>
          <main className='main'>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/:area' exact component={AreaContainer} />
            <Route
              path='/:area/:namespace'
              render={
                ({ match }) =>
                  <PostContainer namespace={match.params.namespace} />
              }
            />
          </main>
        </div>
      </HashRouter>
    </Provider>
  );

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
