import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import NavBar from './areas/Nav.App';
import Areas from './areas';

import rootReducer from '../store/rootReducer';

const store = createStore(rootReducer);

export default function App(): JSX.Element {
  return (
    <Provider store={store} >
      <div className="App">
        <NavBar />
        <Areas />
      </div>
    </Provider>
  );
}