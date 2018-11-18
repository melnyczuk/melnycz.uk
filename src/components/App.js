import React, { Component } from 'react';
import '../style/App.css';

import NavBar from './Nav';
import Viewer from './Viewer';

const navButtons = ['art', 'code'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar id={'nav-main'} title={'hello world'} buttons={navButtons} />
        <Viewer />
      </div>
    );
  }
}

export default App;
