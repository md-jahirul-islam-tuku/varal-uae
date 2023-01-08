import React from 'react';
import photo from '../../../Assets/ILLUSTRATION.png';
import arrow from '../../../Assets/Group 117.png';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className='headerContainer' id='header'>
      <div className='searchContainer'>
        <div class="inputGroup">
          <span class="innerIcon"><FaSearch className='searchIcon' /></span>
          <input type="text" class="search" placeholder="Search a Term | Topic" />
        </div>
      </div>
      <div className='header'>
        <div className='side1'>
          <h4>Claim a Free Quote</h4>
          <h1><span>Get started</span> on fulfilling
            your Dubai or UAE
            dream.</h1>
          <h3>UAE & Offshore Company</h3>
          <p>We provide you with information about UAE or
            Offshore Company Registration & help you
            setup your company with a bank account and
            visas.</p>
          <div className='btn'>
            <button className='btn1'>Start a Company</button>
            <button className='btn2'>Renew a Company</button>
          </div>
        </div>
        <div className='side2'><img src={photo} alt="Header" /></div>
      </div>
      <div className='endLine'>
        <h4>Watch the video about UAE or Offshore Company Registration</h4>
        <a href="#video"><img src={arrow} alt="video-button" /></a>
      </div>
    </div>
  );
};

export default Header;