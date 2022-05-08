import React from "react";

import star from './images/star.svg';
import key from './images/key.svg';
import crown from './images/crown.svg';

function Pricing(){
  return(
    <div id="pricing" className="pricing">
    <div className="container">
       <div className="pricing-inner">
         <h2 className="subjects-title">Course Pricing</h2>
         <p className="subjets-text">Choose pricing that suits to your need.</p>
         <ul className="pricing-list row">
           <li className="pricing-item">
             <div className="list-inner row">
               <div className="price-img">
                 <img src={star} alt="star"/>
               </div>
               <div className="list-desc">
                 <h4 className="pricing-sub">Free</h4>
                 <p className="pricing-num"><span> <span>$</span> 0</span>/month</p>
               </div>
             </div>
             <ul className="second-list">
               <li className="second-item">Free e-book for every class</li>
               <li className="second-item">Materials update every day</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
             </ul>
             <button className="pricing-btn">Your Current Package</button>
           </li>
           <li className="pricing-item">
             <div className="list-inner row">
               <div className="price-img-key">
                 <img src={key} alt="key"/>
               </div>
               <div className="list-desc">
                 <h4 className="pricing-sub">Express</h4>
                 <p className="pricing-num"><span><span>$</span> 75</span>/month</p>
               </div>
             </div>
             <ul className="second-list">
               <li className="second-item">Free e-book for every class</li>
               <li className="second-item">Materials update every day</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
             </ul>
             <button className="pricing-btn">Buy Express</button>
           </li>
           <li className="pricing-item">
             <div className="list-inner row">
               <div className="price-img-crown ">
                 <img src={crown} alt="crown"/>
               </div>
               <div className="list-desc">
                 <h4 className="pricing-sub">Premium</h4>
                 <p className="pricing-num"><span><span>$</span> 115</span>/month</p>
               </div>
             </div>
             <ul className="second-list">
               <li className="second-item">Free e-book for every class</li>
               <li className="second-item">Materials update every day</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
               <li className="second-item">Free download material videos</li>
               <li className="second-item">Unlock 5 material videos</li>
             </ul>
             <button className="pricing-btn">Buy Premium</button>
           </li>
         </ul>
       </div>
     </div>
 </div>
  );
}

export default Pricing;