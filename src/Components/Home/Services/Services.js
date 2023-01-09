import React from 'react';
import './Services.css';
import logo1 from '../../../Assets/dungeon.png';
import logo2 from '../../../Assets/Vector-2.png';
import logo3 from '../../../Assets/Vector-1.png';
import img1 from '../../../Assets/ILLUSTRATION 03  1.png';
import img2 from '../../../Assets/Group.png';
import img3 from '../../../Assets/Group-2.png';
import img4 from '../../../Assets/Group-1.png';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div className='servicesContainer'>
      <div className='head'>
        <h2><span>Dedicated</span><br /> to our mission we are</h2>
        <p>Our services include Company Formation & Renewals,
          Trust & Fiduciary, Tax Residency Setup With Family, Bank
          Accounts, Remote Management, Stock Trading
          Platforms, Ownership Solutions.</p>
      </div>
      <div className='companies'>
        <div>
          <img src={logo1} alt="" />
          <h2>UAE Free Zone Company</h2>
          <p>The Dubai LLC formation documents
            are actually articles of organization or a
            certificate of organization. You can get
            yours today.</p>
          <a href="#1">Get Started</a>
        </div>
        <div>
          <img src={logo2} alt="" />
          <h2>Dubai Local Companies</h2>
          <p>You can register an offshore company
            and open its bank account in Dubai.
            Your agent will help you along all the
            process</p>
          <a href="#2">Get Started</a>
        </div>
        <div>
          <img src={logo3} alt="" />
          <h2>Offshore Companies</h2>
          <p>You can register an offshore company
            and open its bank account in Dubai.
            Your agent will help you along all the
            process</p>
          <a href="#3">Get Started</a>
        </div>
      </div>
      <div className='serviceItem'>
        <div className='row'>
          <div className='row1'>
            <h3>Learn the ways in which you can benefit
              from a UAE/Offshore Company. Then get
              started on fulfilling your UAE dream.</h3>
            <a href="#5">Claim a Free Quote</a>
          </div>
          <div className='service service1'>
            <img src={img1} alt="" />
            <div className='serviceInfo'>
              <h2>Bank Account Setup</h2>
              <p>There are many banks in the United
                Arab Emirates [UAE]. Both locally
                owned and branches of
                multinational ones. Foreign banks
                adjust according to their parent s
                strategies and have changed local
                requirements overnight in the past.
                But we are here to help you.</p>
              <a href="#1">Learn more <FaArrowRight className='arrowIcon'/></a>
            </div>
          </div>
          <div className='service service2'>
            <img src={img3} alt="" />
            <div className='serviceInfo'>
              <h2>UAE Company Visas</h2>
              <p>Your application for visas is critical
                especially if you intend to move to
                Dubai. This becomes even more
                urgent if your family will also move
                with you. All the paperwork is done
                on your behalf smoothly so that you
                may only focus on doing what
                matters most to you.</p>
              <a href="#1">Learn more <FaArrowRight className='arrowIcon'/></a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='service service3'>
            <img src={img2} alt="" />
            <div className='serviceInfo'>
              <h2>Advice & Guidance</h2>
              <p>All activities in the UAE are licensed.
                Whether manufacturing, finance,
                trading, marketing, consultancy or
                restaurants. In some countries only
                manufacturing is licensed. In others
                there is a threshold below which
                business are encouraged. Get our
                insightful guidance today.</p>
              <a href="#1">Learn more <FaArrowRight className='arrowIcon'/></a>
            </div>
          </div>
          <div className='service service4'>
            <img src={img4} alt="" />
            <div className='serviceInfo'>
              <h2>Registration Document Preparation</h2>
              <p>Several documents must be
                prepared to start the process of
                registering a new company in the
                United Arab Emirates. Be it a Dubai
                local company, a free zone one or an
                offshore entity. Your registered
                agent is dedicated to get this done
                for you for a seamless process.</p>
              <a href="#1">Learn more <FaArrowRight className='arrowIcon'/></a>
            </div>
          </div>
          <div className='ending'>
            <h3>We have gathered a team of
              professionals to craft adequate
              services you can rely on for a friction
              free setup in UAE.</h3>
            <a href="#1">More about our services <FaArrowRight className='arrowIcon' /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;