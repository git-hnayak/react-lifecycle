import React, { Component } from 'react';
import {Animal} from './containers/Animal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Animal />
      </div>
    );
  }
}

export default App;
