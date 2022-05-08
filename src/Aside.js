import React from "react";

import google from './images/google.png';
import appstore from './images/apple.png';
import imgApp from './images/app-img.svg'

function Aside(){
  return(
    <aside className="site-aside">
     <div className="container">
        <div className="app-inner row between">
          <div className="app-desc">
            <h4 className="app-title">Get Our Apps, Now!</h4>
            <p className="app-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
            <div className="apps row">
              <img src={google} alt="google"/>
              <img className="appstore" src={appstore} alt="appstore" width="147" height="50"/>
            </div>
          </div>
          <div className="app-img">
            <img className="img-app" src={imgApp} alt="app-img"/>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;