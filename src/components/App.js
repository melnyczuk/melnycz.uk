import React, { Component } from 'react';
import '../style/App.css';

import NavBar from './Nav';

const navButtons = ['art', 'code'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar buttons={navButtons} />
      </div>
    );
  }
}

export default App;
