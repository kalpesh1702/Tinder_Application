import React, { Component } from 'react';
import Router from './Routes/routing.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router />
      </div>
    );
  }
}

export default App;