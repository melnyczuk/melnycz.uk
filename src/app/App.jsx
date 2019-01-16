import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import NavBar from '../components/nav/Nav';
import PrimaryArea from './areas/PrimaryArea';

import rootReducer from './store/reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <NavBar id={'nav-main'} title={'hello world'} />
          <PrimaryArea />
        </div>
      </Provider>
    );
  }
}

export default App;
