import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const About = () => {
  return (
    <Router>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner about">
            <h1>About Us</h1>
            <div class="meet">
              <h2>Meet The Team</h2>
              <p>
                {" "}
                We are the world's FREE coding and software development
                mentorship program. Code Mentor Center is a free coding and
                software development mentorship program. This application gives
                users the ability of finding a mentor or mentee. Each user can
                learn a new programming language, improve their existing skills
                or get career advice.
              </p>
            </div>

            <div class="row">
              <div class="column">
                <div class="person1">
                  <span class="dot" />
                  <h2>Hayden Bryant</h2>
                  <p>Scrum Master</p>{" "}
                </div>
              </div>

              <div class="column">
                <div class="person2">
                  <span class="dot" />
                  <h2>Ryan Silva</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div class="column">
                <div class="person3">
                  <span class="dot" />
                  <h2>Steve Barriere</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div class="column">
                <div class="person4">
                  <span class="dot" />
                  <h2>Hector Domingue</h2>
                  <p>Developer</p>
                </div>
              </div>

              <div class="column">
                <div class="person5">
                  <span class="dot" />
                  <h2>Khammy Phasouvor</h2>
                  <p>QA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default About;
