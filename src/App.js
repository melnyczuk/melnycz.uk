import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import NavBar from './components/nav/Nav';
import Area from './components/area/Area';

import rootReducer from './store/reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <NavBar id={'nav-main'} title={'hello world'} />
          <Area namespace={'main'} />
        </div>
      </Provider>
    );
  }
}

export default App;
