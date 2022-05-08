import React from "react";
import logo from "./images/logo.svg";
import globe from "./images/globe.svg";

function Header() {
  return (
    <div className="Header">
         <header className="site-header">
      <div className="container">
        <div className="header-inner row between">
          <div className="header-logo">
            <img src={logo} alt="logo"/>
          </div>
          <nav className="site-nav">
            <ul className="nav-list row middle">
              <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Courses</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Webinar</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            </ul>
          </nav>
          <div className="header-btns row middle">
            <div className="language-mode">
              <div className="row middle">
                <p className="lang-text">Eng</p>
                <img className="globe-icon" src={globe} alt="globe"/>
                <i className='bx bxs-down-arrow'></i>
              </div> 
              <ul className="dropdown">
                <li className="dropdown-item"><a href="#" className="dropdown-link">Eng</a></li>
                <li className="dropdown-item"><a href="#" className="dropdown-link">Ru</a></li>
                <li className="dropdown-item"><a href="#" className="dropdown-link">Uz</a></li>
              </ul>
            </div>
            <div className="login-btn">Login</div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;

