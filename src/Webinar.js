import React from "react";

import webinar1 from './images/webinar-img.png';
import webinar2 from './images/webinar-img2.png'

function Webinar(){
  return(
    <div id="webinar" className="webinar">
           <div className="container">
        <h2 className="subjects-title">Live Online Webinar</h2>
        <p className="subjets-text">You can stream Webinar live on our apps. Stay update on our Webinar, it’s Free!</p>
        <div className="video-content">
          <iframe className="webinar-video" width="950" height="534" src="https://www.youtube.com/embed/07d2dXHYb94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img className="webinar1" src={webinar1} alt="webinar-img"/>
          <img className="webinar2"  src={webinar2} alt="webinar-img"/>
        </div>
       <a href="#" className="webinar-text">See more webinar videos <i class='bx bx-right-arrow-alt' ></i></a>
      </div>
    </div>
  )
}

export default Webinar;