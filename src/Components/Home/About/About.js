import React from 'react';
import './About.css'
import logo1 from '../../../Assets/Vector-4.png';
import logo2 from '../../../Assets/Vector-3.png';
import logo3 from '../../../Assets/Group 34.png';
import facebook from '../../../Assets/Vector-5.png';
import instagram from '../../../Assets/Vector-6.png';
import youTube from '../../../Assets/Vector-7.png';
import linkedIn from '../../../Assets/Vector-8.png';
import quotation from '../../../Assets/Quotation.png';

const About = () => {
  return (
    <div className='AboutContainer'>
      {/* Left Side */}
      <div className='LeftSide'>
        <div className='blogHeading'>
          <h3>Read about our blogs for more information on our processes</h3>
        </div>
        <div className='blog'>
          <img src={logo1} alt="" />
          <div className='blogInfo'>
            <h3>How to start a company
              formation in Dubai</h3>
            <p>5 Minutes</p>
          </div>
        </div>
        <div className='blog'>
          <img src={logo1} alt="" />
          <div className='blogInfo'>
            <h3>How to start an Offshore
              company formation in Dubai</h3>
            <p>5 Minutes</p>
          </div>
        </div>
        <div className='blog'>
          <img src={logo1} alt="" />
          <div className='blogInfo'>
            <h3>SEO Dubai: Who benefits
              the most?</h3>
            <p>5 Minutes</p>
          </div>
        </div>
        <div className='CommentsHeading'>
          <h3>Satidfied We are When Our Customers Are Happy</h3>
        </div>
        <div className='comments'>
          <div className='user'><img src={logo2} alt="" /></div>
          <div className='commentInfo'>
            <p><img src={quotation} alt="" /></p>
            <div className='comment'>
              <p>I am very happy with them. I'll continue to use their services in future & highly recommend them to anyone,<img src={quotation} alt="" /></p>
              <h3>Muhib Abrar</h3>
            </div>
          </div>
        </div>
        <div className='comments'>
          <div className='user'><img src={logo2} alt="" /></div>
          <div className='commentInfo'>
            <p><img src={quotation} alt="" /></p>
            <div className='comment'>
              <p>Rama has a high level of integrity,
                intellect, knowledge of his
                business, resourcefulness and
                humanity,<img src={quotation} alt="" /></p>
              <h3>Colin Saldahna</h3>
            </div>
          </div>
        </div>
        <div className='comments'>
          <div className='user'><img src={logo2} alt="" /></div>
          <div className='commentInfo'>
            <p><img src={quotation} alt="" /></p>
            <div className='comment'>
              <p>Your advise was so complete that I
                actually realized how beneficial
                this would be to my clients and my
                business.<img src={quotation} alt="" /></p>
              <h3>Mark Swann</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='RightSide'>
        <div className='wholeHeading'>
          <h3>Get to know the whole us and more of our services</h3>
        </div>
        <div className='wholeInfo'>
          <h3>Services</h3>
          <p>Products</p>
          <p>Solutions</p>
          <p>Assurance</p>
          <p>FAQ</p>
          <p>Working at Varal-Singhania</p>
          <h3>Policies</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <h3>About</h3>
          <p>About Us</p>
          <p>Contact us</p>
          <h3>Address</h3>
          <p>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake Towers Dubai United Arab Emirates</p>
          <p>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4] M: +971 55 794 2016 O: +971 4 447 2061</p>
          <h3>Subscribe Now</h3>
          <p>Sunbscribe now to receive our
            Newsletters about amazing
            opportunities in Dubai</p>
        </div>
        <div className='email'>
          <input id='email' type="text" placeholder='Enter email address' /><img src={logo3} alt="" />
        </div>
        <div className='socialMedia'>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
          <img src={youTube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;