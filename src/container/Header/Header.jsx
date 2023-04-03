import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import { Link } from 'react-scroll';



const Header = () => (  


  
  <div className="app__header app__wrapper section__padding gradient" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Lorem, where we offer an unforgettable dining experience in a welcoming and vibrant atmosphere. Our restaurant features a contemporary design with warm lighting and comfortable seating, creating the perfect ambiance for any occasion. </p>
      
      <Link to="menu" smooth={true} duration={300}>
      <button type="button" className="custom__button">Explore Menu</button>
      </Link>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
  
);


export default Header;