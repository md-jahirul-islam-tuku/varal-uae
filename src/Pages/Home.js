import React from 'react';
import About from '../Components/Home/About/About';
import Header from '../Components/Home/Header/Header';
import Pricing from '../Components/Home/Pricing/Pricing';
import Services from '../Components/Home/Services/Services';
import Footer from '../Components/Shared/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <Pricing/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;