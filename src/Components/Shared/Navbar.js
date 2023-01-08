import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/Group 114.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><Link to="/"><img src={logo} alt="Logo" /></Link></div>
      <div className='nav'>
        <ul>
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
        </ul>
        <button>Start a Company</button>
      </div>
    </div>
  );
};

export default Navbar;