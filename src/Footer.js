import React from "react";

import footerLogo from './images/logo.svg'

function Footer(){
  return(
    <div className="site-footer" id="site-footer">
   <div className="footer-inner row evenly">
      <div className="footer-idesc-part">
        <img className="footer-logo" src={footerLogo} alt="logo" width="117" height="56"/>
        <p className="footer-desc">Any feedback or questions? Contact us on our social media</p>
        <ul className="socials row middle">
          <li className="socials-item"><a href="#" className="socials-link"><i className='bx bxl-facebook' ></i></a></li>
          <li className="socials-item"><a href="#" className="socials-link"><i className='bx bxl-twitter' ></i></a></li>
          <li className="socials-item"><a href="#" className="socials-link"><i className='bx bxl-instagram' ></i></a></li>
        </ul>
      </div>
      <div className="footer-list-main">
        <h4 className="footer-title">Menu</h4>
        <ul className="footer-list">
          <li className="footer-item"><a href="#" className="footer-link">Home</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Courses</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Webinar</a></li>
        </ul>
      </div>
      <div className="footer-list-main">
        <h4 className="footer-title">Services</h4>
        <ul className="footer-list">
          <li className="footer-item"><a href="#" className="footer-link">Materials Update</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Trusted Mentor</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Free E-book</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Meeting</a></li>
        </ul>
      </div>
      <div className="footer-list-main">
        <h4 className="footer-title">Further Information</h4>
        <ul className="footer-list">
          <li className="footer-item"><a href="#" className="footer-link">Terms & Conditions</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-list-main">
        <h4 className="footer-title">Apps Download</h4>
        <ul className="footer-list">
          <li className="footer-item"><a href="#" className="footer-link">Google Play Store</a></li>
          <li className="footer-item"><a href="#" className="footer-link">App Store</a></li>
        </ul>
      </div>
    </div>
    <p className="copyright">Copyright 2021 Sinauw. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;