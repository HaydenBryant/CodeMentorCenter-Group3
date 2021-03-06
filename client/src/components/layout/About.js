import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import profileImg from "../../images/p_card_default_img.gif";

const About = () => {
  return (
    <Router>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner about">
            <h1>About Us</h1>
            <div className="meet">
              <h2>Meet The Team</h2>
              <p>
                We are the world's FREE coding and software development
                mentorship program. Code Mentor Center is a free coding and
                software development mentorship program. This application gives
                users the ability of finding a mentor or mentee. Each user can
                learn a new programming language, improve their existing skills
                or get career advice.
              </p>
            </div>

            <div className="row">
              <div className="column">
                <div className="person1">
                  <img src={profileImg} alt="Profile" />
                  <h2>Hayden Bryant</h2>
                  <p>Scrum Master</p>{" "}
                </div>
              </div>

              <div className="column">
                <div className="person2">
                  <img src={profileImg} alt="Profile" />
                  <h2>Ryan Silva</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div className="column">
                <div className="person3">
                  <img src={profileImg} alt="Profile" />
                  <h2>Steve Barriere</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div className="column">
                <div className="person4">
                  <img src={profileImg} alt="Profile" />
                  <h2>Hector Dominguez</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div className="column">
                <div className="person5">
                  <img src={profileImg} alt="Profile" />
                  <h2>Khammy Phasouvor</h2>
                  <p>QA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Router>
  );
};

export default About;
