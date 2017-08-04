import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header span-col-12 grid grid-col-12">
        <div className="container-col-3 grid grid-col-12">
          <div className="header-logo span-col-2">
          </div>
          <ul className="header-links span-col-10">
            <li className="header-link-item">Home</li>
            <li className="header-link-item">About</li>
            <li className="header-link-item">Profile</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
