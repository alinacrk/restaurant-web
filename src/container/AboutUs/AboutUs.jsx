import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { Link } from 'react-scroll';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding " id="about">
    <div className="app__aboutus-overlay flex__center gradient">
      <img src={images.L} alt="L_overlay" />
    </div>

    <div className="app__aboutus-content flex__center ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.arrow} alt="about_arrow" className="arrow__img" />
        <p className="p__opensans">In addition to our delicious food, we also offer an extensive selection of wines and handcrafted cocktails to complement your meal.</p>
        <Link to="menu" smooth={true} duration={300}><button type="button" className="custom__button">Know More</button>
        </Link>
        </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our team</h1>
        <img src={images.arrow} alt="about_arrow" className="arrow__img" />
        <p className="p__opensans">Our knowledgeable staff is always available to make recommendations and help you find the perfect pairing for your dish.</p>
        <Link to="awards" smooth={true} duration={300}><button type="button" className="custom__button">Know More</button>
        </Link>
        </div>
    </div>
  </div>
);

export default AboutUs;