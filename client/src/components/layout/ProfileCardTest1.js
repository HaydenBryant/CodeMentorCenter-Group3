import React, { Fragment } from "react";
import profileImg from "../../images/p_card_default_img.gif";
import star3 from "../../images/star_rating_3.gif";

const ProfileCardTest1 = () => {
  return (
    <Fragment>
      <div className="p-card">
        <header className="head">
          <h3>Julie Smith</h3>
        </header>
        <div className="content">
          <div className="img-ct">
            <img src={profileImg} alt="Profile" />
            <img src={star3} alt="Star Rating" />
          </div>
          <div className="lang-ct">
            <h5>Programming Languages</h5>
            <ul className="pLang">
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">HTML5</a>
              </li>
              <li>
                <a href="#">CSS3</a>
              </li>
            </ul>
            <h5>Speaking Languages</h5>
            <ul className="sLang">
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menteeSummary">
          <ul>
            <li>Previously mentored: 0</li>
            <li>Current mentorships: 0/4</li>
          </ul>
        </div>
        <hr />
        <div className="pSummary">
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
        </div>
        <div className="request-btn">
          <a
            href="http://www.google.com"
            className="btn btn-primary btn-rounded"
          >
            REQUEST MENTORSHIP
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileCardTest1;
