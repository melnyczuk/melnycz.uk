import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import './style/App.css';

import NavBar from '../components/nav/NavBar';
import Areas from './areas/Areas';

import rootReducer from '../store/rootReducer';

const store = createStore(rootReducer);

export function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <NavBar title={'Howard Melnyczuk'} />
        <Areas />
      </div>
    </Provider>
  );
}
