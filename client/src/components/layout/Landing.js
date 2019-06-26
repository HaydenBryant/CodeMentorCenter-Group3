import React from 'react';
import HeroBanner from './HeroBanner';
import CTARegister from './CTARegister';
import Search from './Search';
import ProfileCard from './ProfileCard';

import ProfileCardTest1 from './ProfileCardTest1';
import ProfileCardTest2 from './ProfileCardTest2';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        {/* CMC Hero Banner Container */}
        <HeroBanner />
        {/* Header Content w/ Register Button */}
        <CTARegister />
        {/* Search Field Container */}
        <div className='search-landing'>
          <Search />
        </div>
        {/* Top Rated Mentors Showcase */}
        <div className='top-rated-mentors'>
          <h4 className='lead'>Top Rated Mentors</h4>
          <div className='carousel-ct'>
            <ProfileCard />
            <ProfileCardTest1 />
            <ProfileCardTest2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
