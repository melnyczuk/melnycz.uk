import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import { NavBar } from '../components/nav/Nav';
import Areas from './areas/primary/Primary.area';

import rootReducer from '../store/rootReducer';

const store = createStore(rootReducer);

export class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <NavBar title={'Howard Melnyczuk'} />
          <Areas />
        </div>
      </Provider>
    );
  }
}
