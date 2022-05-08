import React from "react";

import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'

function Copmonents(){
  return(
    <div className="components">
    <div className="container">
        <ul className="components-list row">
          <li className="copmonents-item row col-4">
            <div className="list-img">
              <img src={icon1} alt="icon"/>
            </div>
            <div className="list-desc-p">
              <h3 className="title">Get New Friends</h3>
              <p className="paar">You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
            </div>
          </li>
          <li className="copmonents-item row col-4">
            <div className="list-img">
              <img src={icon2} alt="icon"/>
            </div>
            <div className="list-desc-p">
              <h3 className="title">Expert and Fun Mentor</h3>
              <p className="paar">Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.</p>
            </div>
          </li>
          <li className="copmonents-item row col-4">
            <div className="list-img">
              <img src={icon3} alt="icon"/>
            </div>
            <div className="list-desc-p">
               <h3 className="title">Flexible Access</h3>
              <p className="paar">You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Copmonents