import React, { Component } from 'react';
import classNames from 'classnames';

class FooterLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="footer-nav span-col-12 span-sm-col-2">
        <h4 className={classNames(this.state.open ? 'open' : '', 'footer-title expandable')} onClick={this.toggleMenu.bind(this)}>Navigation</h4>
        <ul className={classNames(this.state.open ? 'open' : '', 'footer-links')}>
          <li className="footer-link-item">Home</li>
          <li className="footer-link-item">About</li>
          <li className="footer-link-item">Profile</li>
        </ul>
      </div>
    )
  }
}

export default FooterLink;
