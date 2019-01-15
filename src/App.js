import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import NavBar from './components/nav/Nav';
import Viewer from './components/viewer/Viewer';

import rootReducer from './store/reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <NavBar id={'nav-main'} title={'hello world'} />
          <Viewer namespace={'main'} />
        </div>
      </Provider>
    );
  }
}

export default App;
