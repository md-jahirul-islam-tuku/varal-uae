import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
  return (
    <div style={{
      width: '1280px',
      margin: 'auto'
      }}>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Main;