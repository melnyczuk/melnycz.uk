import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import '../style/App.css';

import NavBar from './components/nav/Nav';
import Viewer from './components/viewer/Viewer';

import reducers from './store/reducers';
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <NavBar id={'nav-main'} title={'hello world'} />
          <Viewer id={'main'} />
          <Viewer id={'test'} />
        </div>
      </Provider>
    );
  }
}

export default App;
