import React from "react";

import heroImg from './images/hero-img.png';
import heroBg from './images/hero-bg.svg';
import book from './images/book.svg';
import lamp from './images/lamp.svg';
import student1 from './images/student1.png';
import student2 from './images/student2.png';
import student3 from './images/student3.png';
import student4 from './images/student4.png';

function Hero() {
  return (
    <div className="hero-inner">
       <div className="container">
       <div className="hero-inner row middle">  
       <div className="hero-img ">
            <img className="img-hero" src={heroImg} alt="hero" width="785" height="750"/>
            <img className="hero-bg" src={heroBg} alt="hero-bg"/>
            <div className="book-content">
              <img src={book} alt="book"/>
            </div>
            <div className="lamp-content">
              <img src={lamp} alt="lamp"/>
            </div>
            <div className="students row middle">
                <div className="students-img row">
                  <img className="st-1" src={student1} alt="student"/>
                  <img className="st-2" src={student2} alt="student"/>
                  <img className="st-3" src={student3} alt="student"/>
                  <img className="st-4" src={student4} alt="student"/>
                  <button className="plus">
                    <p className="plus-text">+</p>
                  </button>
                </div>
                <p className="students-desc">
                  More than 80k+  <br/>
                Students <span> joined!</span>
                </p>
            </div>
          </div>
          <div className="hero-desc ">
            <h2 className="hero-title">Grow Your Skills To Advance Your Career Path.</h2>
            <p className="hero-text">We have something big for you who want to level up!</p>
            <div className="search-input row middle between">
              <input placeholder="What do you want to learn..." type="text"/>
              <button className="search-btn"><i className='bx bx-search-alt-2'></i></button>
            </div>
            <h3 className="hero-subheading">Suggestions</h3>
              <ul className="suggestions-list row">
                <li className="list-item"><a href="#" className="list-link">UI UX Design</a></li>
                <li className="list-item"><a href="#" className="list-link">CSS Fundamental</a></li>
                <li className="list-item"><a href="#" className="list-link">3D Design Illustration</a></li>
                <li className="list-item"><a href="#" className="list-link">Logo Design</a></li>
                <li className="list-item"><a href="#" className="list-link">Logo Design</a></li>
                <li className="list-item"><a href="#" className="list-link">Icon Design</a></li>
              </ul>
          </div>
         </div>
       </div>
    </div>
  );
}

export default Hero;