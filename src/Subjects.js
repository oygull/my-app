import React from "react";

import subjectImg1 from './images/subjects-img1.png';
import student1 from './images/student1.png'
import subjectImg2 from './images/subjects-img2.png';
import student2 from './images/student2.png'
import subjectImg3 from './images/subjects-img3.png';
import student3 from './images/student3.png'
import subjectImg4 from './images/subjects-img4.png';
import student4 from './images/student4.png'

function Subjects(){
  return(
    <div id="subjects" className="subjects">
    <div className="container">
        <div className="subjects-inner">
          <h2 className="subjects-title">What Do You Want to Learn?</h2>
          <p className="subjets-text">Choose the right class as you need. Then enjoy studying.</p>
          <ul className="subjects-list row">
            <li className="subjects-item">
              <div className="subjects-img">
                <img src={subjectImg1} alt="subject-img"/>
              </div>
              <p className="category">Technology</p>
              <h4 className="subjects-subtitle">Digital Marketing Strategy</h4>
              <p className="list-text">Well organized and easy to make you understand tutorials with ...</p>
              <div className="account row">
                <img src={student1} alt="student" width="40" height="40"/>
                <div className="account-desc">
                  <h4 className="account-title">Joey Piere</h4>
                  <p className="text">Mentor</p>
                </div>
              </div>
              <div className="btn-content">
                <button className="subject-btn">Access Class</button>
              </div>
            </li>
            <li className="subjects-item">
              <div className="subjects-img">
                <img src={subjectImg2} alt="subject-img"/>
              </div>
              <p className="category">Design</p>
              <h4 className="subjects-subtitle">Figma Fundamental</h4>
              <p className="list-text">These lessons and exercises will help you start designing ...</p>
              <div className="account row">
                <img src={student2} alt="student" width="40" height="40"/>
                <div className="account-desc">
                  <h4 className="account-title">Araya Sheila</h4>
                  <p className="text">Mentor</p>
                </div>
              </div>
              <div className="btn-content">
                <button className="subject-btn">Access Class</button>
              </div>
            </li>
            <li className="subjects-item">
              <div className="subjects-img">
                <img src={subjectImg3} alt="subject-img"/>
              </div>
              <p className="category">Coding</p>
              <h4 className="subjects-subtitle">HTML Fundamental</h4>
              <p className="list-text">Well organized and easy to make you understand tutorials with ...</p>
              <div className="account row">
                <img src={student3} alt="student" width="40" height="40"/>
                <div className="account-desc">
                  <h4 className="account-title">Ellisa Ruth</h4>
                  <p className="text">Mentor</p>
                </div>
              </div>
              <div className="btn-content">
                <button className="subject-btn">Access Class</button>
              </div>
            </li>
            <li className="subjects-item">
              <div className="subjects-img">
                <img src={subjectImg4} alt="subject-img"/>
              </div>
              <p className="category">Coding</p>
              <h4 className="subjects-subtitle">Android App Development</h4>
              <p className="list-text">Take your Android coding skills to the next level, advanced ...</p>
              <div className="account row">
                <img src={student4} alt="student" width="40" height="40"/>
                <div className="account-desc">
                  <h4 className="account-title">Wendy Troye</h4>
                  <p className="text">Mentor</p>
                </div>
              </div>
              <div className="btn-content">
                <button className="subject-btn">Access Class</button>
              </div>
            </li>
          </ul>
          <button className="sunject-main-btn">Show All Classes</button>
        </div>
      </div>
    </div>
  )
}

export default Subjects;