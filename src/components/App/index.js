import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Post from '../Post';

import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <BrowserRouter>
            <div className="post grid grid-col-12 span-col-12">
              <Switch>
                <Route path="/" component={Post} />
              </Switch>
            </div>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
