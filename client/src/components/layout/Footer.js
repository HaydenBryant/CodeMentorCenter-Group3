import React, { Fragment } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 60f0712c6e9eaef774603e93a58fd8068302264b

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-ct">
        <div className="social-ct">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="http://wwww.facebook.com" className="fa fa-facebook">
                {" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" className="fa fa-twitter">
                {" "}
                Twitter
              </a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="location-ct">
          <h4>Campus</h4>
          <p>
            <strong>Rhode Island:</strong>
            <br />
            Providence:
            <br />
            100 Niantic Avenue,
            <br />
            providence, RI 02907
            <br />
          </p>
        </div>
        <div className="sitemap-ct">
          <h4>Explore Our Site</h4>
          <ul>
            <li>Home</li>
            <li>Mentors</li>
            <li>Mentees</li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">
          © 2019 CareerDevs Computer Science University
          <br />
          Designed & developed by the students of cohort 7 / Runtime Terror
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
