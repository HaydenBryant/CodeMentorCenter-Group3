import React from "react";
import HeroBanner from "./HeroBanner";
import CTARegister from "./CTARegister";
import Search from "./Search";
import ProfileCard from "./ProfileCard";
import OnlineLearning from "./OnlineLearning";
import Footer from "./Footer";

import ProfileCardTest1 from "./ProfileCardTest1";
import ProfileCardTest2 from "./ProfileCardTest2";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        {/* CMC Hero Banner Container */}
        <HeroBanner />
        {/* Header Content w/ Register Button */}
        <CTARegister />
        {/* Search Field Container */}
        <div className="search-landing">
          <Search />
        </div>
        {/* Top Rated Mentors Showcase */}
        <div className="top-rated-mentors">
          <h4 className="lead">Top Rated Mentors</h4>
          <div className="carousel-ct">
            <ProfileCard />
            <ProfileCardTest1 />
            <ProfileCardTest2 />
          </div>
        </div>
        {/* Higher Learning at CareerDevs */}
        <OnlineLearning />
        {/* Random Mentor Showcase */}
        <div className="random-mentors">
          <h4 className="lead">Mentors</h4>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
          <div className="carousel-ct">
            <ProfileCard />
            <ProfileCardTest1 />
            <ProfileCardTest2 />
          </div>
        </div>
        {/* Random Mentee Showcase */}
        <div className="random-mentees">
          <h4 className="lead">Mentees</h4>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
          <div className="carousel-ct">
            <ProfileCard />
            <ProfileCardTest1 />
            <ProfileCardTest2 />
          </div>
        </div>
        {/* Footer Container */}
        <Footer />
      </div>
    </section>
  );
};

export default Landing;
