import React from 'react';
import './Footer.css';
import logoUrl from '../../images/telescope.png';

import FooterLink from './FooterLink/FooterLink';

const Footer = () => {
  return (
    <footer className="footer span-col-12 grid grid-col-12">
      <div className="container-col-2 container-md-col-3 grid grid-col-12">
        <div className="footer-logo span-col-12 span-sm-col-2">
          <img src={logoUrl} alt="Logo"/>
        </div>

        <FooterLink />
        <FooterLink />

        <div className="footer-subscribe span-col-12 span-sm-col-5">
          <h4 className="footer-title">Subscribe</h4>
          <p>Subscribe to our newsletter</p>
          <div className="footer-input-group grid grid-col-12">
            <input className="footer-input span-col-8" type="text"/>
            <button className="footer-input-button span-col-4">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
