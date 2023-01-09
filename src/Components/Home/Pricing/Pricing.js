import React from 'react';
import './Pricing.css'
import { FaRegCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className='PricingContainer'>
      <div className='PricingHeading'>
        <h2>Most<span> popular affordable pricing </span>per
          jurisdictions are brought to you to
          kick off your adventure.</h2>
      </div>
      <div className='PricingCardContainer'>
        <div className='PricingCard'>
          <h3>AJMAN OFFSHORE</h3>
          <h2>$2,997 <span>One Time Payment</span></h2>
          <p className='PHead'>Ajman Offshore New Company formation includes</p>
          <p><FaRegCheckCircle className='priceIcon'/> Attestation Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Agent</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Office</p>
          <p><FaRegCheckCircle className='priceIcon' /> Varal Administrative</p>
          <p><FaRegCheckCircle className='priceIcon' /> Preparing Statutory File</p>
          <p><FaRegCheckCircle className='priceIcon' /> Liasing with Registration Authorities</p>
          <p><FaRegCheckCircle className='priceIcon' /> PDue Diligence Appraisal</p>
          <p><FaRegCheckCircle className='priceIcon' /> Keeping The Register</p>
          <p><FaRegCheckCircle className='priceIcon' /> Seal Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Certificate of Good Standing</p>
          <button>Continue</button>
        </div>
        <div className='PricingCard'>
          <h3>RAK ICC</h3>
          <h2>$2,997 <span>One Time Payment</span></h2>
          <p className='PHead'>Rak Icc New Company formation includes</p>
          <p><FaRegCheckCircle className='priceIcon' /> Attestation Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Agent</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Office</p>
          <p><FaRegCheckCircle className='priceIcon' /> Varal Administrative</p>
          <p><FaRegCheckCircle className='priceIcon' /> Preparing Statutory File</p>
          <p><FaRegCheckCircle className='priceIcon' /> Liasing with Registration Authorities</p>
          <p><FaRegCheckCircle className='priceIcon' /> PDue Diligence Appraisal</p>
          <p><FaRegCheckCircle className='priceIcon' /> Keeping The Register</p>
          <p><FaRegCheckCircle className='priceIcon' /> Seal Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Certificate of Good Standing</p>
          <button>Continue</button>
        </div>
        <div className='PricingCard'>
          <h3>SHARJAH MEDIA CITY</h3>
          <h2>$4,124 <span>One Time Payment</span></h2>
          <p className='PHead'>Sharjah Media City New Company formation include </p>
          <p><FaRegCheckCircle className='priceIcon' /> Attestation Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Agent</p>
          <p><FaRegCheckCircle className='priceIcon' /> Registered Office</p>
          <p><FaRegCheckCircle className='priceIcon' /> Varal Administrative</p>
          <p><FaRegCheckCircle className='priceIcon' /> Preparing Statutory File</p>
          <p><FaRegCheckCircle className='priceIcon' /> Liasing with Registration Authorities</p>
          <p><FaRegCheckCircle className='priceIcon' /> PDue Diligence Appraisal</p>
          <p><FaRegCheckCircle className='priceIcon' /> Keeping The Register</p>
          <p><FaRegCheckCircle className='priceIcon' /> Seal Charges</p>
          <p><FaRegCheckCircle className='priceIcon' /> Certificate of Good Standing</p>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;