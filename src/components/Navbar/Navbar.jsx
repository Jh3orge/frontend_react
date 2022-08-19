import React from 'react'

import './Navbar.scss';
import { images } from '../../constants';

const navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.adidas} alt="logo" width="400px"/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))};
      </ul>
    </nav>
  )
}

export default navbar