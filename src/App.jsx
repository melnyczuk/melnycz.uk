import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../style/App.css';

import NavBar from './components/nav/Nav';
import Viewer from './components/viewer/Viewer';

import rootReducer from './store/reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)} >
        <div className="App">
          <NavBar id={'nav-main'} title={'hello world'} />
          <Viewer namespace={'main'} />
        </div>
      </Provider>
    );
  }
}

export default App;
