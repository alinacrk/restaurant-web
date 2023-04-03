import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links gradient">
      <div className="app__footer-links_contact gradient">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> Vienna, 1200, AT</p>
        <p className="p__opensans">+42-690-38-458</p>
        
      </div>

      <div className="app__footer-links_logo gradient">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work gradient">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 01:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Lorem. All Rights reserved</p>
    </div>

  </div>
);

export default Footer;