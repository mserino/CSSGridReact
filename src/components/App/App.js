import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="grid grid-col-12">
        <Header />
      </div>
    );
  }
}

export default App;
