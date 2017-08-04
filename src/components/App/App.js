import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Header from '../Header/Header';
import Post from '../Post/Post';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="grid grid-col-12">
        <Header />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default App;
