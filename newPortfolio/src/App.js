import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBarComponente } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponente/>
      </div>
    );
  }
}

export default App;
