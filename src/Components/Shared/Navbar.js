import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/Group 114.png';
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const menu = <>
    <li><NavLink style={({ isActive }) => ({
      color: isActive ? '#333333' : '',
      fontSize: '19px',
      fontWeight: '600'
    })} to="/">Home</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
      color: isActive ? '#333333' : '',
      fontSize: '19px',
      fontWeight: '600'
    })} to="/Services">Services</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
      color: isActive ? '#333333' : '',
      fontSize: '19px',
      fontWeight: '600'
    })} to="/pricing">Pricing</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
      color: isActive ? '#333333' : '',
      fontSize: '19px',
      fontWeight: '600'
    })} to="/about">About Us</NavLink></li>
    <li><button>Start a Company</button></li>
  </>
  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <div><Link to="/"><img src={logo} alt="Logo" /></Link></div>
        <div className='nav'>
          <ul>
            {menu}
          </ul>
        </div>
        <div className='mobileNav'>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;